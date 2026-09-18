import crypto from 'node:crypto';
import http from 'node:http';
import querystring from 'node:querystring';
import 'dotenv/config';

const port = Number(process.env.PORT || 3001);
const sandbox = process.env.PAYFAST_SANDBOX === 'true';
const payfastUrl = sandbox ? 'https://sandbox.payfast.co.za/eng/process' : 'https://www.payfast.co.za/eng/process';

function getSignature(data) {
  const payload = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}=${encodeURIComponent(String(value).trim()).replace(/%20/g, '+')}`)
    .join('&');
  const signedPayload = process.env.PAYFAST_PASSPHRASE
    ? `${payload}&passphrase=${encodeURIComponent(process.env.PAYFAST_PASSPHRASE.trim()).replace(/%20/g, '+')}`
    : payload;
  return crypto.createHash('md5').update(signedPayload).digest('hex');
}

function sendJson(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  response.end(JSON.stringify(body));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', (chunk) => { body += chunk; });
    request.on('end', () => resolve(body));
    request.on('error', reject);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type' });
    response.end();
    return;
  }

  if (request.method === 'POST' && request.url === '/api/payfast/create-payment') {
    try {
      const body = JSON.parse(await readBody(request));
      const amount = Number(body.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        sendJson(response, 400, { error: 'A valid payment amount is required.' });
        return;
      }

      const payment = {
        merchant_id: process.env.PAYFAST_MERCHANT_ID,
        merchant_key: process.env.PAYFAST_MERCHANT_KEY,
        return_url: process.env.PAYFAST_RETURN_URL,
        cancel_url: process.env.PAYFAST_CANCEL_URL,
        notify_url: process.env.PAYFAST_NOTIFY_URL,
        name_first: body.firstName || 'Nativechild',
        name_last: body.lastName || 'Customer',
        email_address: body.email,
        m_payment_id: `nativechild-${Date.now()}`,
        amount: amount.toFixed(2),
        item_name: 'Nativechild order',
        custom_str1: body.orderReference || '',
      };

      if (!payment.email_address) {
        sendJson(response, 400, { error: 'An email address is required.' });
        return;
      }

      sendJson(response, 200, { action: payfastUrl, fields: { ...payment, signature: getSignature(payment) } });
    } catch {
      sendJson(response, 400, { error: 'Invalid payment request.' });
    }
    return;
  }

  if (request.method === 'POST' && request.url === '/api/payfast/notify') {
    const rawBody = await readBody(request);
    const notification = querystring.parse(rawBody);
    console.log('PayFast ITN received:', notification.m_payment_id || 'unknown', notification.payment_status || 'unknown');
    response.writeHead(200);
    response.end('OK');
    return;
  }

  if (request.method === 'GET' && request.url === '/api/health') {
    sendJson(response, 200, { ok: true, provider: 'payfast', sandbox });
    return;
  }

  response.writeHead(404);
  response.end('Not found');
});

server.listen(port, () => console.log(`PayFast server listening on http://localhost:${port}`));
