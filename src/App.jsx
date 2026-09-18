import { cloneElement, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/images/logo.png';
import whatsappButton from './assets/images/whatsapp-button.png';
import heroSlide1 from './assets/images/hero-slide-1.jpg';
import heroSlide2 from './assets/images/hero-slide-2.jpg';
import categoryHair from './assets/images/category-hair.jpg';
import categoryBody from './assets/images/category-body.jpg';
import categoryCombo from './assets/images/category-combo.jpg';
import categoryAccessories from './assets/images/category-accessories.png';
import categoryBar from './assets/images/category-bar.png';
import iconParaben from './assets/images/icon-paraben-free.png';
import iconFragrance from './assets/images/icon-fragrance-free.png';
import iconColour from './assets/images/icon-colour-free.png';
import iconMineralOil from './assets/images/icon-mineral-oil-free.png';
import iconSulphate from './assets/images/icon-sulphate-silicon-free.png';
import iconNoHarsh from './assets/images/icon-no-harsh-chemicals.png';
import iconAnimalCruelty from './assets/images/icon-animal-cruelty-free.png';
import iconPlantBased from './assets/images/icon-plant-based.png';
import productEbonyBlack from './assets/images/product-ebony-black.jpg';
import productCastorOil from './assets/images/product-castor-oil.png';
import productHappyHairMist from './assets/images/product-happy-hair-mist.png';
import productMilkHoneyCreme from './assets/images/product-milk-honey-creme.png';
import productDeepConditioner from './assets/images/product-deep-conditioner.png';
import productMoisturisingShampoo from './assets/images/product-moisturising-shampoo.png';
import productCoconutOil from './assets/images/product-coconut-oil.png';
import productWhippedSheaButter from './assets/images/product-whipped-shea-butter.png';
import productAvocadoOil from './assets/images/product-avocado-oil.jpg';
import productSweetAlmondOil from './assets/images/product-sweet-almond-oil.jpg';
import kurlGuideStepOne from './assets/images/kurl-guide-step-one.jpg';
import kurlGuideStepTwo from './assets/images/kurl-guide-step-two.jpg';
import kurlGuideStepThree from './assets/images/kurl-guide-step-three.jpg';
import kurlShortHair from './assets/images/kurl-short-hair.jpg';
import kurlGrowth from './assets/images/kurl-growth.jpg';
import kurlLocs from './assets/images/kurl-locs.jpg';
import kurlStyling from './assets/images/kurl-styling.jpg';
import partnerPnp from './assets/images/partner-pnp.png';
import partnerGame from './assets/images/partner-game.png';
import partnerDischem from './assets/images/partner-dischem.png';
import partnerClicks from './assets/images/partner-clicks.png';
import partnerFocus from './assets/images/partner-focus.jpg';
import partnerTakealot from './assets/images/partner-takealot.png';
import partnerShoprite from './assets/images/partner-shoprite.webp';
import partnerCheckers from './assets/images/partner-checkers.png';
import partnerOne from './assets/images/partner-one.png';
import partnerTwo from './assets/images/partner-two.png';
import videosHero from './assets/images/videos-hero.jpg';
import aboutNativechild from './assets/images/about-nativechild.png';
import homeBrandBanner from './assets/images/home-brand-banner.jpg';
import testimonialNdumy from './assets/images/testimonial-ndumy-n.jpg';
import testimonialVuke from './assets/images/testimonial-vuke-twins.jpg';
import testimonialLethabo from './assets/images/testimonial-lethabo.png';
import testimonialNontle from './assets/images/testimonial-nontle.jpg';
import testimonialNtombi from './assets/images/testimonial-ntombi-m.jpg';
import testimonialRotondwa from './assets/images/testimonial-rotondwa.png';
import testimonialBasie from './assets/images/testimonial-basie-m.png';
import testimonialCharmaine from './assets/images/testimonial-charmaine.png';
import founderSonto from './assets/images/founder-sonto.jpg';

const iconPaths = {
  shipping: 'M2.5 7.5A2.5 2.5 0 0 1 5 5h8.5a2.5 2.5 0 0 1 2.5 2.5V9h2.4l2.6 3.4V17a2 2 0 0 1-2 2h-1.3a2.8 2.8 0 0 1-5.6 0h-5.1a2.8 2.8 0 0 1-5.6 0H3.5a2 2 0 0 1-2-2v-7.5Zm2.5.5h9.5V7.5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5V8Zm11 3.5h3.5l-1.9-2.5H16v2.5Zm-9 7.5a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Zm12.5 0a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM4 15h9.5v-1.5H4V15Z',
  facebook: 'M14 8.5V7c0-.7.5-1 1-1h2V2h-3c-3.3 0-4.5 2.2-4.5 4.6V8.5H7v3.8h2.5V22H14v-9.7h2.8l.5-3.8H14Z',
  twitter: 'M19.8 7.1c.01.2.01.4.01.6 0 6.1-4.6 13.1-13.1 13.1-2.6 0-5.1-.8-7.1-2.2.4.05.9.07 1.3.07 2.2 0 4.2-.7 5.8-2-2.1 0-3.8-1.4-4.4-3.3.3.05.6.08 1 .08.4 0 .8-.05 1.1-.15-2.2-.5-3.8-2.4-3.8-4.7v-.06c.7.4 1.5.7 2.4.7-1.4-1-2.2-2.4-2.2-4.1 0-.9.2-1.7.7-2.4 2.4 2.9 6 4.8 10 5-.1-.4-.1-.8-.1-1.2 0-2.8 2.3-5.1 5.1-5.1 1.5 0 2.8.6 3.8 1.6 1.2-.2 2.3-.7 3.2-1.2-.4 1.2-1.2 2.2-2.2 2.9 1-.1 1.9-.4 2.8-.8-.7 1-1.6 1.9-2.6 2.6Z',
  youtube: 'M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.6 5.2 12 5.2 12 5.2s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6C1.8 8.6 1.8 12 1.8 12s0 3.4.4 4.8c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.8.4-4.8s0-3.4-.4-4.8ZM10 15.3V8.7L15.7 12 10 15.3Z',
  instagram: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.8 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  cart: 'M7 8V7a5 5 0 0 1 10 0v1h2.5l-1.2 12.2A2 2 0 0 1 16.3 22H7.7a2 2 0 0 1-2-1.8L4.5 8H7Zm2 0h6V7a3 3 0 0 0-6 0v1Zm-1.3 2.2L7.4 19h9.2l.7-8.8H7.7Z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 1.8a8.2 8.2 0 1 1 0 16.4 8.2 8.2 0 0 1 0-16.4Zm-.9 3.9v5.2c0 .24.1.46.28.63l3.6 3.2 1.2-1.35-3.2-2.84V7.7h-1.88Z',
  pin: 'M12 2.25a6.75 6.75 0 0 0-6.75 6.75c0 4.9 6 11.74 6.26 12.03a.66.66 0 0 0 .98 0c.26-.29 6.26-7.13 6.26-12.03A6.75 6.75 0 0 0 12 2.25Zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z',
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={iconPaths[name]} />
    </svg>
  );
}

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/nativechild.co/?pnref=story', icon: 'facebook' },
  { label: 'Twitter', href: 'https://mobile.twitter.com/nativechild_co', icon: 'twitter' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCJavc2fewat06xFycs7NG5A/featured', icon: 'youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/nativechild.co/?hl=en', icon: 'instagram' },
];

const navItems = [
  { label: 'About Us', href: '/about-us', submenu: [{ label: 'Community Initiative', href: '/community-initiative' }] },
  { label: 'Testimonials', href: '/#section-testimonials' },
  {
    label: 'Shop',
    href: '/shop',
    submenu: [
      { label: 'Haircare', href: '/products/haircare' },
      { label: 'Combos', href: '/products/combos' },
      { label: 'Bodycare', href: '/products/bodycare' },
      { label: 'Accessories', href: '/products/accessories' },
      { label: 'Book Hair & Beauty', href: 'https://www.fresha.com/providers/nativechild-hair-beauty-bar-ozggijot?allOffer=true', external: true },
      { label: 'Book for Cape Town', href: 'https://www.fresha.com/providers/nativechild-cape-town-fvh5ryd9/offline', external: true },
      { label: 'Salon', href: '/hair-beauty-bar' },
      { label: 'Shop all', href: '/shop' },
    ],
  },
  { label: 'Kurl Care & Guide', href: '/kurl-care-guide' },
  { label: 'Videos', href: '/videos' },
  { label: 'Where to Buy', href: '/where-to-buy' },
  { label: 'Affiliate Registration', href: '/affiliate-registration', submenu: [{ label: 'Affiliate Dashboard', href: '/affiliate-registration' }] },
  { label: 'Power Up Games', href: 'https://www.powerupgames.co.za/', external: true },
];

const heroSlides = [heroSlide1, heroSlide2];

const categoryCards = [
  { title: 'Hair Products', href: '/products/haircare', image: categoryHair },
  { title: 'Bodycare', href: '/products/bodycare', image: categoryBody },
  { title: 'Combos', href: '/products/combos', image: categoryCombo },
  { title: 'Accessories', href: '/products/accessories', image: categoryAccessories },
  { title: 'Hair & Beauty Bar', href: '/hair-beauty-bar', image: categoryBar, buttonLabel: 'Pricelist & Salons' },
];

const trustBadges = [
  { label: 'Paraben Free', icon: iconParaben },
  { label: 'Artificial Fragrance Free', icon: iconFragrance },
  { label: 'Colour Free', icon: iconColour },
  { label: 'Mineral Oil Free', icon: iconMineralOil },
  { label: 'Sulfate and Silicon Free', icon: iconSulphate },
  { label: 'No Harsh Chemicals', icon: iconNoHarsh },
  { label: 'Animal Cruelty Free', icon: iconAnimalCruelty },
  { label: 'Plant Based', icon: iconPlantBased },
];

const products = [
  { name: 'Ebony Black Natural Hair Color 100ml', price: 'R 87.90', image: productEbonyBlack },
  { name: 'Hair Growth Stimulating Castor Oil 200ml', price: 'R 86.90', image: productCastorOil },
  { name: 'Happy Hair Hydrating Mist (100ml)', price: 'R 65.90', image: productHappyHairMist },
  { name: 'Milk n Honey Moisture Créme 220ml', price: 'R 82.39', image: productMilkHoneyCreme },
];

const haircareProducts = [
  { name: 'Ebony Black Natural Hair Color 100ml', price: 'R 87.90', image: productEbonyBlack },
  { name: 'Deep Conditioner 250ml', price: 'R 76.90', image: productDeepConditioner },
  { name: 'Moisturising Shampoo 250ml', price: 'R 76.90', image: productMoisturisingShampoo },
  { name: 'Hair Growth Stimulating Castor Oil (200ml)', price: 'R 86.90', image: productCastorOil },
  { name: 'Coconut Oil (100ml)', price: 'R 50.50', image: productCoconutOil },
  { name: 'Whipped Shea Butter Cream (125ml)', price: 'R 97.90', image: productWhippedSheaButter },
  { name: 'Avocado Oil (200ml)', price: 'R 108.80', image: productAvocadoOil },
  { name: 'Sweet Almond Oil (200ml)', price: 'R 98.90', image: productSweetAlmondOil },
  { name: 'Avocado Oil (100ml)', price: 'R 60.40', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2016__02__Untitled-design-31-600x600.png' },
  { name: '100% Raw Shea Butter (125ml)', price: 'R 98.90', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2016__02__Untitled-design-29-600x600.png' },
  { name: 'Grapeseed Oil (100ml)', price: 'R 60.40', image: productSweetAlmondOil },
  { name: 'Sweet Almond Oil (100ml)', price: 'R 60.40', image: productSweetAlmondOil },
  { name: 'Herbal Hair Tea', price: 'R 65.90', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2016__02__hair-tea.jpg' },
  { name: 'Coconut Oil (250ml)', price: 'R 98.90', image: productCoconutOil },
  { name: '100% Raw Shea Butter (250ml)', price: 'R 186.90', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2023__04__Nativechild_Raw-Sheabutter-600x600.png' },
  { name: 'Whipped Shea Butter Cream (250ml)', price: 'R 79.00', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2016__09__whipped-sheabutter.jpg' },
  { name: 'Starter Oil Combo', price: 'R 175.99', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2017__05__Nativechild_Moisturising-Shampoo-and-Deep-Conditioning-Combo-500ml-3-600x600.png' },
  { name: 'Super Moisture Combo', price: 'R 368.40', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2017__05__Website-IMGs-Update-22-600x600.png' },
  { name: 'Deep Conditioner 500ml', price: 'R 136.40', image: productDeepConditioner },
  { name: 'Black African Soap with Activated charcoal (100g)', price: 'R 76.90', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2017__09__Nativechild_Black-African-Soap-with-Activated-Charcoal-1.png' },
  { name: 'Milk n Honey Moisture Créme 220ml', price: 'R 82.39', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2017__12__Website-IMGs-Update-19.png' },
  { name: 'Anti breakage & Transitioning combo', price: 'R 317.90', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2018__11__Website-IMGs-Update-21.png' },
  { name: 'Kids- Moisturising Shampoo (250ml)', price: 'R 65.90', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2019__02__kids-cowash-moisturising-shampoo.png' },
  { name: 'Kids Deep Conditioner (250ml)', price: 'R 65.90', image: 'https://nativechildtesting.tmdphotography.co.za/nativechild-assets/2019__02__kids-deep-conditioner-250ml.png' },
];

const shopProducts = [
  ['Deep Conditioner 250ml', 'R76.90', '2016__02__Website-IMGs-Update-2.png'], ['Deep Conditioner 500ml', 'R136.40', '2016__02__Website-IMGs-Update-2.png'], ['Deep Conditioner 1L', 'R179.90', '2016__02__Website-IMGs-Update-2.png'],
  ['Ebony Black Natural Hair Color 100ml', 'R87.90', '2016__02__IMG_3390-1-scaled.jpg'], ['Hair Growth Stimulating Castor Oil 100ml', 'R53.80', '2019__12__castor-oil.png'], ['Hair Growth Stimulating Castor Oil 200ml', 'R86.90', '2019__12__castor-oil.png'],
  ['Happy Hair Hydrating Mist (100ml)', 'R65.90', '2019__11__Website-IMGs-Update-6.png'], ['Coconut Oil (100ml)', 'R50.50', '2023__04__Nativechild_Coconu-Oil-25Oml.png'], ['Coconut Oil (250ml)', 'R98.90', '2023__04__Nativechild_Coconu-Oil-25Oml.png'],
  ['Aloe Vera & Mint Soap (100g)', 'R50.49', '2017__09__Nativechild_Black-African-Soap-with-Activated-Charcoal-1.png'], ['Black African Soap with Activated Charcoal (100g)', 'R76.90', '2017__09__Nativechild_Black-African-Soap-with-Activated-Charcoal-1.png'], ['Whipped Shea Butter', 'R79.00', '2016__02__Untitled-design-19.png'],
  ['Sweet Almond Oil', 'R69.00', '2016__02__almond-oil.jpg'], ['Anti breakage & Transitioning combo', 'R317.90', '2018__11__Website-IMGs-Update-21.png'], ['Nativechild Starter Combo', 'R159.00', '2018__11__Website-IMGs-Update-21.png'],
  ['Body Butter Bundle', 'R149.00', '2018__11__Website-IMGs-Update-21.png'], ['Hair Growth Bundle', 'R189.00', '2018__11__Website-IMGs-Update-21.png'], ['Egg Detangling Brush', 'R97.90', '2023__04__Nativechild_Egg-detangling-Brush.png'],
  ['Wide Tooth Comb', 'R24.00', '2023__04__Nativechild_Egg-detangling-Brush.png'], ['Cosmetic & Hair Accessories Bag', 'R86.90', '2019__11__b25cc1e0-cc0e-4895-84fa-50dfa49e7faf-2_adobespark-1.png'], ['Dry Hair Shampoo (100ml)', 'R76.90', '2023__05__160.png'],
  ['Curl Enhancing Custard (250ml)', 'R98.90', '2023__05__156.png'], ['Dark Brown Natural Hair Color', 'R87.99', '2016__02__IMG_3390-1-scaled.jpg'], ['Grapeseed Oil (100ml)', 'R60.40', '2016__02__almond-oil.jpg'],
  ['Whipped Shea Butter Cream (250ml)', 'R79.00', '2016__09__whipped-sheabutter.jpg'], ['Avocado Oil (100ml)', 'R60.40', '2016__02__Untitled-design-31-600x600.png'], ['Avocado Oil (200ml)', 'R108.80', '2016__02__avo-oil.jpg'],
  ['Herbal Hair Tea', 'R65.90', '2016__02__hair-tea.jpg'], ['100% Raw Shea Butter (125ml)', 'R98.90', '2016__02__Untitled-design-29-600x600.png'], ['100% Raw Shea Butter (250ml)', 'R186.90', '2023__04__Nativechild_Raw-Sheabutter-600x600.png'],
  ['Whipped Shea Butter Cream (125ml)', 'R97.90', '2016__02__Untitled-design-19-600x600.png'],
].map(([name, price, image]) => ({ name, price, image: `https://nativechildtesting.tmdphotography.co.za/nativechild-assets/${image}` }));

const testimonials = [
  { name: 'Ndumy N', photo: testimonialNdumy, quote: 'So grateful for your products. @nativechild.co will be using them for the rest of my life. Much love.' },
  { name: 'Vuke Twins', photo: testimonialVuke, quote: 'Yeeeeeeey my home town. Now when people ask me what do I use on my hair, I\'ll be happy to tell them @native child products and are available at game. Thank you guys.' },
  { name: 'Lethabo', photo: testimonialLethabo, quote: 'My hair since I\'ve started using your product, doing my hair and treating it, has never been so fun and I\'d like to thank you guys for the great service you provide, from ordering to delivery. I\'m a happy client.' },
  { name: 'Nontle T', photo: testimonialNontle, quote: 'I just wanna say thank you so much for bringing my hairline back. The castor oil saved my hairline.' },
  { name: 'Ntombi M', photo: testimonialNtombi, quote: 'Thank you so much for all your hard work. After using your amazing castor oil, I could really see results of my hair looking thicker, feeling softer and growing longer.' },
  { name: 'Rotondwa', photo: testimonialRotondwa, quote: 'I started using coconut oil and castor oil, and now my hair is healthy and my hairline is recovering.' },
  { name: 'Basie M', photo: testimonialBasie, quote: 'I\'ve been using your products and I must say my hair is looking amazing. Thank you for taking good care of my hair with your products.' },
  { name: 'Charmaine', photo: testimonialCharmaine, quote: 'I\'ve been using the Moisture Creme for a while now and my hair feels so hydrated and soft every time.' },
];

const faqs = [
  { question: 'Do I need to register to place an order?', answer: 'No you don\u2019t need to register to place an order. You are welcome to order as a guest.' },
  { question: 'How do I reset my password?', answer: 'Visit the My Account page and use the reset password option.' },
  { question: 'How do I create an order?', answer: 'Add products to your cart and proceed to checkout.' },
];

const currencyOptions = ['USD', 'GBP', 'ZAR'];

function useMotionReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const elements = root.querySelectorAll('.motion-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

function HomePage({ pageContent, cart, onAddToCart, onUpdateQuantity }) {
  const [heroIndex, setHeroIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [currency, setCurrency] = useState('ZAR');
  const [cartNotice, setCartNotice] = useState('');
  const mainRef = useMotionReveal();

  const addProduct = (product) => {
    onAddToCart(product);
    setCartNotice(`${product.name} has been added successfully.`);
    window.setTimeout(() => setCartNotice(''), 3200);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((index) => (index + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-utility-bar">
          <div className="header-utility-left">
            <span className="free-shipping-note">
              <span className="shipping-icon" aria-hidden="true"><Icon name="shipping" /></span>
              Free Shipping in South Africa for orders over R500
            </span>
            <div className="social-links" aria-label="Social media links">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <Icon name={item.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="header-utility-right">
            <a href="https://nativechildorders.aftership.com/" target="_blank" rel="noreferrer">Track Order</a>
            <a href="/frequently-asked-questions">FAQs</a>
            <a href="/my-account">My account</a>
            <a href="https://www.surveyfiesta.com/SurveyFiesta/Survey/NativeChildCustCareSurv" target="_blank" rel="noreferrer">Support</a>
            <a aria-label={`Cart with ${cart.length} items`} className="cart-link" href="/cart">
              <span className="cart-link-icon" aria-hidden="true"><Icon name="cart" /></span>
              <span className="cart-link-text">Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</span>
            </a>
          </div>
        </div>

        <div className="header-brand-row">
          <a aria-label="Nativechild home" className="brand-logo-link" href="/">
            <img className="brand-logo-image" src={logo} alt="Nativechild" />
          </a>
        </div>

        <div className="header-nav-row">
          <nav className="page-select-menu" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.submenu ? (
                <div className="nav-dropdown" key={item.label}>
                  <a className="nav-dropdown-trigger" href={item.href}>
                    {item.label}
                    <span aria-hidden="true" className="nav-caret">▾</span>
                  </a>
                  <div className="nav-dropdown-menu" aria-label={`${item.label} submenu`}>
                    {item.submenu.map((sub) => (
                      <a key={sub.label} href={sub.href} target={sub.external ? '_blank' : undefined} rel={sub.external ? 'noreferrer' : undefined}>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>
                  {item.label}
                </a>
              )
            )}
            <label className="header-search" aria-label="Search products">
              <span className="header-search-icon" aria-hidden="true">⌕</span>
              <input type="search" placeholder="Search for:" aria-label="Search for products" />
            </label>
          </nav>
        </div>
      </header>

      <main className="site-main" ref={mainRef}>
        {pageContent ? cloneElement(pageContent, { cart, onAddToCart: addProduct, onUpdateQuantity }) : <div className="page home-page">
        <section className="hero-section">
          <div className="hero-slides" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <div key={slide} className={`hero-slide${index === heroIndex ? ' active' : ''}`} style={{ backgroundImage: `url(${slide})` }} />
            ))}
          </div>
          <div className="hero-overlay" />

          <div className="currency-switcher" aria-label="Currency selector">
            {currencyOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`currency-button currency-button-${option.toLowerCase()}${currency === option ? ' active' : ''}`}
                aria-pressed={currency === option}
                onClick={() => setCurrency(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">RESPONSIBLY SOURCED</p>
            <h1>Plant based bodycare &amp; haircare</h1>
            <a className="button" href="/shop">Shop Now</a>
          </div>

          <div className="hero-slider-dots" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <span key={slide} className={`hero-dot${index === heroIndex ? ' active' : ''}`} />
            ))}
          </div>
        </section>

        <section className="section category-intro-section motion-reveal motion-fade-bottom">
          <div className="section-inner">
            <div className="section-heading">
              <h2>For kinky, kurly, coily hair</h2>
              <p>
                We are passionate about both Hair &amp; Health. We developed &amp; locally manufacture a natural-based
                hair care system specifically formulated for the needs of Afro, Kinky, Ethnic type hair.
              </p>
            </div>
          </div>
        </section>

        <section className="section category-section motion-reveal motion-fade-left">
          <div className="section-inner">
            <div className="category-card-grid">
              {categoryCards.map((card) => (
                <article key={card.title} className="category-card motion-reveal motion-fade-right" style={{ backgroundImage: `url(${card.image})` }}>
                  <div className="category-card-overlay" />
                  <div className="category-card-content">
                    <h3>{card.title}</h3>
                    <a className="button" href={card.href}>{card.buttonLabel || 'Shop Now'}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted motion-reveal motion-fade-left">
          <div className="section-inner">
            <p className="eyebrow">Vegan, Sulfate free, paraben free, animal cruelty free. Kind to you, kind to nature.</p>
            <div className="icon-grid">
              {trustBadges.map((item) => (
                <div key={item.label} className="icon-card">
                  <img src={item.icon} alt={item.label} />
                  <h3>{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-featured-products motion-reveal motion-fade-right">
          <div className="section-inner">
            <div className="section-heading">
              <h2>Featured Products</h2>
              <p>
                Our products are designed to assist hair growth, restore moisture whilst reducing breakage and provide all
                the nourishment &amp; minerals that your hair needs to grow and thrive.
              </p>
            </div>

            <div className="featured-product-grid">
              {products.map((product) => (
                <article key={product.name} className="featured-product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="featured-product-card-body">
                    <h3>{product.name}</h3>
                    <div className="product-footer">
                      <span className="wc-price featured-price">{product.price}</span>
                      <button type="button" className="wc-add-to-cart featured-add-to-cart" onClick={() => addProduct(product)}>Add to Cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="centered">
              <a className="button featured-view-all-button" href="/shop">View All Products</a>
            </div>
          </div>
        </section>

        <section className="section home-brand-banner motion-reveal motion-fade-right" style={{ backgroundImage: `url(${homeBrandBanner})` }}>
          <div className="section-inner">
            <div className="section-heading">
              <h2>
                Join the thousands of happy customers and be part of the <strong>brand that cares</strong>!
              </h2>
              <p>
                Our products are designed to assist hair growth, restore moisture whilst reducing breakage and provide all
                the nourishment &amp; minerals that your hair needs to grow and thrive.
              </p>
              <div className="section-cta">
                <a className="button" href="/shop">Shop Now</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted testimonials-section motion-reveal motion-fade-bottom" id="section-testimonials">
          <div className="section-inner">
            <h2 className="testimonials-heading">Customer Testimonials</h2>
            <div className="testimonial-slider-wrap">
              {testimonials.map((item, index) => (
                <figure key={item.name} className={`live-testimonial-card testimonial-slide${index === testimonialIndex ? ' active' : ''}`}>
                  <div className="live-testimonial-avatar">
                    <img src={item.photo} alt={item.name} className="live-testimonial-photo" />
                  </div>
                  <blockquote className="live-testimonial-quote">{item.quote}</blockquote>
                  <figcaption className="live-testimonial-author">- {item.name}</figcaption>
                </figure>
              ))}
              <div className="testimonial-dots" aria-label="Testimonials navigation">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`testimonial-dot${index === testimonialIndex ? ' active' : ''}`}
                    aria-label={`Show testimonial from ${item.name}`}
                    onClick={() => setTestimonialIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section motion-reveal motion-fade-left">
          <div className="section-inner founder-section">
            <div className="founder-story-grid">
              <div className="founder-photo" aria-hidden="true" style={{ backgroundImage: `url(${founderSonto})` }} />
              <div className="founder-card">
                <h2>
                  “Our brand is intended to provide good quality products to millions of people who need them, but also to
                  evoke a feeling of pride in oneself, knowing that you are enough.”
                </h2>
                <p className="founder-name">Sonto Pooe</p>
                <p className="founder-role">Founder, NativeChild</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section subscribe-section motion-reveal motion-fade-left">
          <div className="section-inner">
            <h2>Subscribe</h2>
            <p>Subscribe for updates on the latest products and offers from Nativechild.</p>
            <form className="subscribe-form" onSubmit={(event) => event.preventDefault()}>
              <label className="subscribe-form-label" htmlFor="subscribe-email">Email</label>
              <div className="subscribe-form-row">
                <input id="subscribe-email" type="email" placeholder="Email" className="subscribe-email-input" />
                <button type="submit" className="subscribe-submit-button">Subscribe</button>
              </div>
            </form>
          </div>
        </section>

        <section className="section motion-reveal motion-fade-right">
          <div className="section-inner">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="centered">
              <a className="button faq-view-all-button" href="/frequently-asked-questions">View all FAQs</a>
            </div>
          </div>
        </section>
        </div>}
      </main>

      {cartNotice && <div className="cart-success-notice" role="status">{cartNotice}</div>}

      <a className="whatsapp-float" href="https://api.whatsapp.com/send?text=Hi%20Nativechild" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
        <img src={whatsappButton} alt="WhatsApp" className="whatsapp-float-image" />
      </a>

      <footer className="site-footer live-footer">
        <div className="footer-grid">
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>
            <p><a className="footer-support-link" href="https://www.surveyfiesta.com/SurveyFiesta/Survey/NativeChildCustCareSurv" target="_blank" rel="noreferrer">Visit Customer Support</a></p>
            <p><strong>Email:</strong> <a href="mailto:sales@nativechild.co">sales@nativechild.co</a></p>
            <p><strong>Phone:</strong> <a href="tel:+27114750551">011 475 0551</a></p>
            <div className="footer-meta-row">
              <span className="footer-meta-icon" aria-hidden="true"><Icon name="clock" /></span>
              <ul className="footer-hours">
                <li>Monday - Thursday 8:00am - 5pm</li>
                <li>Friday 8am - 4:30pm</li>
                <li>Weekend &amp; Public Holidays - Closed</li>
              </ul>
            </div>
            <div className="footer-meta-row footer-address-row">
              <span className="footer-meta-icon" aria-hidden="true"><Icon name="pin" /></span>
              <p className="footer-address">Bergzicht Office Park 3 Rooibok Street Allensnek, 1709 South Africa</p>
            </div>
          </div>
          <div>
            <h3>About</h3>
            <a href="/where-to-buy">Where to Buy</a>
            <a href="/frequently-asked-questions">FAQs</a>
            <a href="/careers">Careers</a>
            <a href="/blog">News</a>
            <a href="/contact-us">Contact Us</a>
          </div>
          <div>
            <h3>Shop</h3>
            <a href="/shop">Shop Online</a>
            <a href="/my-account">My Account</a>
            <a href="https://nativechildorders.aftership.com/" target="_blank" rel="noreferrer">Track Order</a>
            <a href="/cart">Cart</a>
            <a href="/checkout">Checkout</a>
          </div>
          <div>
            <h3>Products</h3>
            <a href="/shop">All Products</a>
            <a href="/products/haircare">Haircare</a>
            <a href="/products/combos">Combos</a>
            <a href="/products/bodycare">Bodycare</a>
            <a href="/products/accessories">Accessories</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright {new Date().getFullYear()} nativechild. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const kurlTipsOne = [
  ['Determine your hair porosity.', 'To see how the test is done click here.'],
  ['Moisturise properly.', 'Follow the right moisture method for your hair. LOC / LCO / LO / LC are methods of retaining moisture which help hair stay moisturised for longer. Make sure the hair is fully hydrated before applying oils.'],
  ['Take care of your scalp.', 'Your scalp is the garden through which your hair sprouts. Keep it clean, hydrated and nourished, and massage regularly to circulate blood.'],
];
const kurlTipsTwo = [
  ['Avoid heat at all costs.', 'It not only damages your hair but your hair may not get its curls back after constant use.'],
  ['Leave your hair alone.', 'The more you manipulate, comb and braid, the more you stress your hair. Try a style that can last at least 3 days.'],
  ['Satin is your friend.', 'Sleep with a satin bonnet or pillow. It helps retain length and prevents mechanical damage.'],
];
const kurlTipsThree = [
  ['Braiding.', 'Avoid braiding more than twice a year and never keep braids longer than 6-8 weeks.'],
  ['Eat your plants & hydrate your body.', 'Hair comes from within and is a sign of vitality. No amount of product can make up for a poor diet.'],
  ['Choose plant based.', 'It is better for your hair and your body. Mother nature knows best.'],
];

function KurlCarePage() {
  const hairTypes = [
    { title: 'Short hair gang', image: kurlShortHair, products: ['LOC combo / LO combo', 'Full LOC / LO combo', 'Full LC/LC combo', 'Hydrating mist', 'Hairgrowth castor oil', 'Milk n honey moisture creme'] },
    { title: 'Hairgrowth boosters', image: kurlGrowth, products: ['Hairgrowth castor oil', 'Kids hairgrowth oil', 'Coconut oil', 'Starter oil combo', '500ml Shampoo & conditioner combo'] },
    { title: 'Dreads / Locs', image: kurlLocs, products: ['Style combo', 'Whipped sheabutter', 'Happy hair hydrating combo', 'Moisturising Shampoo', 'Deep Conditioner'] },
    { title: 'Styling', image: kurlStyling, products: ['Style combo', 'Happy hair hydrating mist', 'Natural gel styler', 'Milk n honey moisture creme', 'Hairgrowth castor oil', 'Whipped sheabutter'] },
  ];
  const faqs = ['Are nativechild products for both hair and skin?', 'I want to grow my hair. Where do I start?', 'How quickly will my hair grow?', 'Are nativechild products safe for children?', 'Can men use your products?', 'My hair is dry and I have the Super Moisture Combo'];
  const renderTips = (tips) => tips.map(([title, text]) => <p key={title}><strong>{title}</strong> {text}</p>);
  return <main className="kurl-page">
    <section className="kurl-page-hero"><p>How to use our Products</p><h1>Kurl Care &amp; Guide</h1></section>
    <section className="kurl-section kurl-care-section"><div className="kurl-inner"><h2>Care Guide</h2><p className="kurl-lead">The curly hair type is dryer than all other hair types and needs more care to ensure it is fully hydrated &amp; nourished. Check out our Nativechild patented Kurl care &amp; guide below!</p><p><strong>Here are some useful tips.</strong></p>
      <div className="kurl-tip-row"><div>{renderTips(kurlTipsOne)}</div><img src={kurlGuideStepOne} alt="Kurl guide step one" /></div>
      <div className="kurl-tip-row kurl-tip-row-reverse"><img src={kurlGuideStepTwo} alt="Kurl guide step two" /><div>{renderTips(kurlTipsTwo)}</div></div>
      <div className="kurl-tip-row"><div>{renderTips(kurlTipsThree)}</div><img src={kurlGuideStepThree} alt="Kurl guide step three" /></div>
    </div></section>
    <section className="kurl-section kurl-light-section"><div className="kurl-inner"><h2>Hair Types</h2><p className="kurl-lead">We are passionate about both Hair &amp; Health. We developed &amp; locally manufacture a natural-based hair care system specifically formulated for the needs of Afro, Kinky, Ethnic type hair.</p><div className="kurl-reco-grid"><article><h3>Low porosity</h3><p>The recommended moisture method to use is</p><ul><li>LC - Liquid cream</li><li>LO - Liquid oil</li></ul><strong>We recommend these products</strong><p>Milk n honey moisture creme, Happy hair hydrating mist, Hairgrowth castor oil, Grapeseed oil, Avocado oil, Sweet almond oil, Whipped sheabutter, Coconut oil.</p></article><article><h3>High porosity</h3><p>The recommended moisture method to use is</p><ul><li>LCO: Liquid - Cream - Oil</li><li>LOC: Liquid - Oil - Cream</li></ul><strong>We recommend these products</strong><p>Milk n honey moisture creme, Happy hair hydrating mist, Hairgrowth castor oil.</p></article></div></div></section>
    <section className="kurl-section"><div className="kurl-inner"><h2>Shop by Hair Type</h2><p className="kurl-lead">We are passionate about both Hair &amp; Health. We developed &amp; locally manufacture a natural-based hair care system specifically formulated for the needs of Afro, Kinky, Ethnic type hair.</p><div className="kurl-hair-grid">{hairTypes.map((item) => <article key={item.title}><img src={item.image} alt={item.title} /><div><h3>{item.title}</h3><strong>We recommend these products:</strong><ul>{item.products.map((product) => <li key={product}>{product}</li>)}</ul></div></article>)}</div></div></section>
    <section className="kurl-section kurl-light-section"><div className="kurl-inner"><h2>FAQs on how to use our products</h2><div className="kurl-faq-list">{faqs.map((faq) => <details key={faq}><summary>{faq}<span>+</span></summary><p>Our team can help you choose the right routine and products for your hair.</p></details>)}</div><div className="kurl-support"><h2>Still not sure which products to use?</h2><p>If you need more information, please contact us or ask us a message in our Chat for a quick response.</p><a href="mailto:sales@nativechild.co">sales@nativechild.co</a><a className="kurl-support-button" href="https://www.surveyfiesta.com/SurveyFiesta/Survey/NativeChildCustCareSurv" target="_blank" rel="noreferrer">Customer Support</a></div></div></section>
  </main>;
}

function WhereToBuyPage() {
  const partners = [
    ['Pick n Pay', partnerPnp], ['Game', partnerGame], ['Dis-Chem', partnerDischem], ['Clicks', partnerClicks], ['Focus Stores', partnerFocus],
    ['Takealot', partnerTakealot], ['Shoprite', partnerShoprite], ['Checkers', partnerCheckers], ['Store Partner 1', partnerOne], ['Store Partner 2', partnerTwo],
  ];
  return <main className="where-to-buy-page">
    <section className="where-to-buy-hero"><div className="where-to-buy-hero-overlay" /><div className="currency-switcher" aria-label="Currency selector"><button type="button" className="currency-button currency-button-usd">USD</button><button type="button" className="currency-button currency-button-gbp">GBP</button><button type="button" className="currency-button currency-button-zar active">ZAR</button></div><div className="where-to-buy-hero-content"><p className="eyebrow">100% Plant Based Hair and Body Care</p><h1>Where to buy</h1></div></section>
    <section className="where-to-buy-section"><div className="where-to-buy-inner"><h2>Buy via our website, or at any of these stores</h2><div className="partner-grid">{partners.map(([name, image]) => <article key={name}><img src={image} alt={name} /></article>)}</div><div className="stockist-locator"><h2>Stockist Locator</h2><p>Game Kokstad, Main St, Shop 25, Regional Centre, Kokstad, 4700</p><form onSubmit={(event) => event.preventDefault()}><label>ZIP / Address:<input type="text" placeholder="Enter a location" /></label><label>Radius:<select defaultValue="25km"><option>1km</option><option>5km</option><option>10km</option><option>25km</option><option>50km</option><option>75km</option><option>100km</option><option>150km</option><option>200km</option><option>300km</option></select></label><button type="submit">Search</button></form></div></div></section>
  </main>;
}

function VideosPage() {
  const videos = [
    ['oBE2iGxSDyY', 'LOC - with Nativechild products'],
    ['Hv0wzbpPMlA', "NativeChildkids - Styling your baby's Afro"],
    ['VAZLxKYBF1k', 'NativeChild - enters The Dischem Pharmacy chain'],
    ['U__hFUJBMmU', 'Wash day Routine - 4c hair'],
  ];
  return <main className="videos-page">
    <section className="videos-page-hero"><div className="videos-page-hero-overlay" /><div className="currency-switcher" aria-label="Currency selector"><button type="button" className="currency-button currency-button-usd">USD</button><button type="button" className="currency-button currency-button-gbp">GBP</button><button type="button" className="currency-button currency-button-zar active">ZAR</button></div><div className="videos-page-hero-content"><p className="eyebrow">Plant based bodycare &amp; haircare</p><h1>Videos</h1></div></section>
    <section className="videos-content"><h2>Nativechild Videos</h2><a className="videos-subscribe" href="https://www.youtube.com/channel/UCJavc2fewat06xFycs7NG5A" target="_blank" rel="noreferrer">Subscribe on YouTube</a><div className="videos-grid">{videos.map(([id, title]) => <article key={id}><iframe title={title} src={`https://www.youtube.com/embed/${id}?feature=oembed`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></article>)}</div></section>
  </main>;
}

function AboutPage() {
  return <main className="about-page"><div className="about-inner"><h1>About Us</h1><div className="about-story"><img src={aboutNativechild} alt="Nativechild About Us" /><div className="about-copy"><p>Nativechild is a natural hair &amp; bodycare brand, created for the under served needs of women of color. We are passionate about both Hair &amp; Health. We developed &amp; locally manufacture a natural-based hair care system specifically formulated for the needs of Afro, Kinky, Ethnic type hair. This hair is very fragile &amp; dry by nature compared to other hairtypes and achieving optimal moisture &amp; hairgrowth has always a challenge..until now.</p><p>We strongly believe that mother nature is far superior than man made alternatives. We use plant based, natural, safe, sustainable ingredients of the finest grade in the production of our products and where possible we make use of food grade oils. Our products do not contain any harsh chemicals, sulphates, paraben or petroleum and are animal cruelty-FREE.</p><p>We know through experience harsh chemicals are not only unbeneficial to hair but they can contribute to all sort of undesirable effects in the body. The company's core focus is on providing our customers with effective products that do not contribute to toxicity in the body. Our products are designed to assist hair growth, restore moisture whilst reducing breakage and provide all the nourishment &amp; minerals that your hair needs to grow and thrive.</p><p>This haircare range is a labour of love developed after over years of experience. We have been a member of the Society of Cosmetic Chemists of South Africa for the past 8 years. Our CEO and founder served as a council member for the Society Cosmetic Chemists of South Africa.</p><p>Join the thousands of happy customers and be part of the brand that cares!</p><p>We understand both sides of the coin being an end user and a formulator. Haircare development is a science and careful care &amp; consideration has been invested in developing this brand.</p><blockquote><a href="https://www.facebook.com/nativechild.co" target="_blank" rel="noreferrer">NativeChild - Hair &amp; Body Care Products</a></blockquote></div></div><details className="about-community" open><summary>Community Initiative <span>−</span></summary><div><p>Nativechild is committed to uplifting communities through education, empowerment and practical support. We believe that healthy hair and healthy confidence begin with access to quality care and opportunity.</p><p>Through our community initiatives, we support local outreach, mentorship and awareness around natural hair wellness, self-care and entrepreneurship. We are proud to stand with the communities we serve and to create value beyond our products.</p><p>Our goal is to help women and families feel seen, supported and confident while building a stronger, more connected future for all.</p></div></details></div></main>;
}

function AffiliatePage() {
  const categories = [['All Products', '/shop'], ['Haircare', '/products/haircare'], ['Combos', '/products/combos'], ['Bodycare', '/products/bodycare'], ['Accessories', '/products/accessories']];
  return <main className="affiliate-page"><div className="affiliate-layout"><section className="affiliate-main"><h1>Affiliate Registration</h1><div className="affiliate-forms"><form><h2>Login</h2><label>Username or email address *<input type="text" /></label><label>Password *<input type="password" /></label><div className="affiliate-action"><button type="submit">Login</button><label className="affiliate-check"><input type="checkbox" /> Remember me</label></div><a href="/my-account/lost-password/">Lost your password?</a></form><form><h2>Register</h2><label>First name *<input type="text" /></label><label>Last name *<input type="text" /></label><label>Phone Number *<input type="tel" /></label><label>Country *<select defaultValue=""><option value="" disabled>Select a country / region...</option><option>South Africa</option><option>Botswana</option><option>Namibia</option><option>Zimbabwe</option></select></label><label>Email address *<input type="email" /></label><label>Password *<input type="password" /></label><label className="affiliate-check"><input type="checkbox" /> I have read and agree to the website <a href="/terms-conditions">terms and conditions</a> *</label><button type="submit">Register</button></form></div></section><aside className="affiliate-sidebar"><h4>Product Search</h4><form className="affiliate-search"><input type="search" placeholder="Search for:" /><button type="submit">Search</button></form><h4>Product Categories</h4><ul>{categories.map(([name, href]) => <li key={name}><a href={href}>{name}</a></li>)}</ul></aside></div></main>;
}

function CommunityInitiativePage() {
  const videos = [
    ['mroIvmQZaKU', 'Community Initiative Video 1'], ['Up-hSK_YUPw', 'Community Initiative Video 2'], ['LVfNjkLiFMQ', 'Community Initiative Video 3'], ['WOdjF0CUvjY', 'Community Initiative Video 4'],
    ['tzXppVIxWnU', 'Community Initiative Video 5'], ['l3Fm-uv-9P8', 'Community Initiative Video 6'], ['O_L9pUwZ8Do', 'Community Initiative Video 7'], ['mroIvmQZaKU', 'Community Initiative Video 8'],
  ];
  return <main className="community-page"><div className="community-page-inner"><p className="eyebrow">Nativechild</p><h1>Community Initiatives</h1><div className="community-intro"><p>Nativechild is proud to support communities through meaningful outreach, education, empowerment and practical support. We believe healthy hair, healthy confidence and opportunity should be accessible to every woman and family we serve.</p><p>Through our community initiatives, we uplift local voices, inspire confidence and create opportunities for growth, care and connection.</p></div><div className="community-video-grid">{videos.map(([id, title]) => <a key={`${id}-${title}`} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer"><img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={title} /><span>{title}</span></a>)}</div></div></main>;
}

function FaqPage() {
  const questions = ['Do I need to register to place an order?', 'How do I edit my account information?', 'How do I reset my password?', 'How do I create an order?', 'How do I make payment?', 'How do I track my order?', 'How long does delivery take?'];
  return <main className="audited-page faq-live-page"><div className="audited-page-inner"><p className="eyebrow">Customer Support</p><h1>Frequently Asked Questions</h1><p className="audited-lead">Helpful answers about orders, delivery, payments and account support.</p><section><h2>Everything you need before placing an order</h2><p>We have grouped the most common customer questions below so you can get straight to checkout, account updates and delivery information.</p><div className="audited-faq-list">{questions.map((question) => <details key={question}><summary>{question}<span>+</span></summary><p>Contact our support team for help with this question and your order.</p></details>)}</div></section><section className="audited-support"><h2>Need more help?</h2><p>Reach out to our customer care team if you need help with a specific order, stockist question or account issue.</p><strong>Monday to Friday, 8:00 to 17:00</strong><a href="https://www.surveyfiesta.com/SurveyFiesta/Survey/NativeChildCustCareSurv" target="_blank" rel="noreferrer">Contact Support</a></section></div></main>;
}

function MyAccountPage() {
  return <main className="my-account-live-page audited-page"><div className="my-account-live-layout"><section className="my-account-live-main"><h1>My Account</h1><div className="my-account-auth-grid"><form className="my-account-auth-card"><h2>Login</h2><label>Username or email address *<input type="text" /></label><label>Password *<input type="password" /></label><div className="my-account-login-actions"><button type="submit">Log in</button><label className="my-account-remember-me"><input type="checkbox" /> Remember me</label></div><p className="my-account-lost-link"><a href="/my-account/lost-password/">Lost your password?</a></p></form><form className="my-account-auth-card"><h2>Register</h2><label>Email address *<input type="email" /></label><label>Password *<input type="password" /></label><button type="submit">Register</button></form></div></section><aside className="my-account-live-sidebar"><h4>Product Search</h4><form className="my-account-search-row"><input type="search" placeholder="Search for:" /><button type="submit">Search</button></form><h4>Product Categories</h4><ul>{[['All Products','/shop'],['Haircare','/products/haircare'],['Combos','/products/combos'],['Bodycare','/products/bodycare'],['Accessories','/products/accessories']].map(([name,href])=><li key={name}><a href={href}>{name}</a></li>)}</ul></aside></div></main>;
}

function CartPage({ cart, onAddToCart, onUpdateQuantity }) {
  return <main className="cart-live-page audited-page"><div className="cart-live-wrap"><h1>Cart</h1><p className="cart-live-faq-copy">Please read our <a href="/frequently-asked-questions">Frequently Asked Questions</a> for answers to general questions.</p>{cart.length === 0 ? <div className="cart-live-empty"><p>Your cart is currently empty.</p><a className="button cart-live-return" href="/shop">Return to shop</a></div> : <div className="cart-items-live">{cart.map((item) => <article key={item.name} className="cart-item-live"><img src={item.image} alt={item.name} /><div><h2>{item.name}</h2><p>{item.price}</p><div className="cart-item-controls"><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}>-</button><input aria-label={`Quantity for ${item.name}`} type="number" min="0" step="1" value={item.quantity} onChange={(event) => onUpdateQuantity(item.name, event.target.value)} /><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => onAddToCart(item)}>+</button></div></div></article>)}<a className="button cart-live-return" href="/checkout">Proceed to checkout</a></div>}</div></main>;
}

function CheckoutPage({ cart }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', postalCode: '' });
  const [payment, setPayment] = useState('PayFast');
  const [error, setError] = useState('');
  const total = cart.reduce((sum, item) => sum + (Number.parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity), 0);
  const submitCheckout = async (event) => {
    event.preventDefault();
    setError('');
    if (payment !== 'PayFast') { setError('Only PayFast is configured for live payment right now.'); return; }
    try {
      const response = await fetch('/api/payfast/create-payment', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, amount: total, email: form.email }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to start PayFast checkout.');
      const paymentForm = document.createElement('form');
      paymentForm.method = 'POST';
      paymentForm.action = result.action;
      Object.entries(result.fields).forEach(([name, value]) => { const input = document.createElement('input'); input.type = 'hidden'; input.name = name; input.value = value; paymentForm.appendChild(input); });
      document.body.appendChild(paymentForm);
      paymentForm.submit();
    } catch (checkoutError) { setError(checkoutError.message); }
  };
  const updateField = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  return <main className="checkout-live-page audited-page"><div className="checkout-live-header"><h1>Checkout</h1><p>Securely complete your order and choose your preferred delivery details.</p></div><div className="wc-checkout-layout audited-checkout"><form className="wc-checkout-form" onSubmit={submitCheckout}><h3>Billing details</h3><label>First name<input required value={form.firstName} onChange={updateField('firstName')} /></label><label>Last name<input required value={form.lastName} onChange={updateField('lastName')} /></label><label>Email address<input required type="email" value={form.email} onChange={updateField('email')} /></label><label>Phone<input required type="tel" value={form.phone} onChange={updateField('phone')} /></label><label>Street address<input required value={form.address} onChange={updateField('address')} /></label><label>Town / City<input required value={form.city} onChange={updateField('city')} /></label><label>Postal code<input required value={form.postalCode} onChange={updateField('postalCode')} /></label><label>Order notes<textarea /></label><section className="wc-payment-section"><h3>Choose payment method</h3><label className="wc-payment-option"><input type="radio" name="payment" checked={payment === 'PayFast'} onChange={() => setPayment('PayFast')} /> <span><strong>PayFast</strong><br />Secure payment via PayFast.</span></label><label className="wc-payment-option"><input type="radio" name="payment" checked={payment === 'PayPal'} onChange={() => setPayment('PayPal')} /> <span><strong>PayPal</strong><br />Not configured yet.</span></label></section>{error && <p className="checkout-error" role="alert">{error}</p>}<button className="button" type="submit" disabled={!cart.length}>Place order</button></form><aside className="wc-order-review"><h3>Your order</h3>{cart.map((item) => <p key={item.name}>{item.name} × {item.quantity} <strong>R {(Number.parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}</strong></p>)}<p>Total <strong>R {total.toFixed(2)}</strong></p></aside></div></main>;
}

function CareersPage() { return <main className="careers-live-page audited-page"><div className="careers-live-wrap"><header className="careers-live-header"><h4>Nativechild</h4><h1>Careers</h1></header><section className="careers-live-card"><h2>Want to work for us?</h2><p>Are you interested in working for NativeChild? Please complete the form below to submit your CV.</p><form className="careers-live-form"><label>Name &amp; Surname *<input type="text" /></label><label>Mobile Number *<input type="tel" /></label><label>Email Address *<input type="email" /></label><label className="careers-upload-row">Upload your CV *<input type="file" /><small>Accepted file types: pdf, word, Max. file size: 128 MB.</small></label><label>Message *<textarea /></label><button type="submit">Submit</button></form></section></div></main>; }

function BlogPage() { return <main className="blog-live-page audited-page"><div className="blog-live-wrap"><header className="blog-live-header"><h4>Haircare and bodycare tips</h4><h1>Nativechild Blog</h1></header><article className="blog-live-post"><h2>Winter Hair Care Tips</h2><p className="blog-live-cats">Blog, Haircare Tips</p><p className="blog-live-excerpt">Winter is the coldest season of the year. Everything gets dry, leaves fall and so might your hair if not treated...</p><a className="blog-live-readmore" href="/blog">read more</a></article></div></main>; }

function ContactPage() { return <main className="contact-live-page"><section className="contact-live-hero"><div className="contact-live-hero-overlay" /><div className="contact-live-hero-inner"><p className="contact-live-kicker">We'd love to hear from you</p><h1>Talk to Us</h1></div></section><div className="contact-live-content audited-page-inner"><div className="contact-live-grid"><div className="contact-live-stack"><section className="contact-live-card"><h2>FAQ’s</h2><p>Please read our <a href="/frequently-asked-questions">Frequently Asked Questions</a> for answers to general questions.</p></section><section className="contact-live-card"><h3>E-MAIL</h3><p>SALES ENQUIRIES: sales@nativechild.co</p><p>GENERAL ENQUIRIES: enquiries@nativechild.co</p><h3>OPERATING HOURS:</h3><p>Monday - Thursday 8:00am - 5pm<br />Friday 8am - 4:30pm<br />Weekend &amp; Public holidays - closed</p><h2>Find Us</h2><h3>ADDRESS</h3><p>Head Office<br />Unit 9, Bergzicht Office Park<br />3 Rooibok Street, Allensnek, 1709</p></section></div><form className="contact-live-form"><h2>Contact Us</h2>{['Name*','Email*','Subject'].map(label=><label key={label}>{label}<input type={label==='Email*'?'email':'text'} /></label>)}<label>Message<textarea /></label><button className="button" type="submit">Submit</button></form></div></div></main>; }

function HairBeautyPage() { return <main className="hairbeauty-live-page audited-page"><div className="hairbeauty-live-header"><h1>Hair &amp; Beauty Bar</h1><p>Discover salon services, treatment options and styling support.</p></div><section className="hairbeauty-content audited-page-inner"><h2>Service Highlights</h2><ul><li>Wash, treat and style</li><li>Protective styling prep</li><li>Healthy scalp and moisture consultations</li><li>Retail product recommendations</li></ul><h2>Price Guide</h2><div className="price-table"><p>Basic wash and style: From R 250.00</p><p>Deep treatment and trim: From R 380.00</p><p>Protective style prep: From R 300.00</p></div><p>Final pricing may vary by hair length and service time.</p></section></main>; }

const routePages = {
  '/about-us': { title: 'About Nativechild', intro: 'Naturally made haircare and bodycare created with Afro, kinky, coily and curly hair in mind.', sections: [['Our Story', 'Nativechild develops and locally manufactures natural-based products that help people care for their hair, skin and sense of self.'], ['Made With Care', 'Our formulas are plant based, kind to nature and designed to make everyday care feel simple, joyful and effective.']] },
  '/community-initiative': { title: 'Community Initiative', intro: 'Growing confidence, opportunity and care in the communities we call home.', sections: [['Making A Difference', 'Nativechild supports initiatives that help young people feel seen, supported and proud of who they are.']] },
  '/kurl-care-guide': { title: 'Kurl Care & Guide', intro: 'A practical guide to caring for kinky, kurly and coily hair.', sections: [['Cleanse Gently', 'Choose a gentle cleanser and give your scalp the attention it needs without stripping away natural moisture.'], ['Moisture Matters', 'Layer hydration through your routine and protect your ends with styles that keep manipulation low.'], ['Keep Learning', 'Every head of hair is different. Notice what your hair responds to and build a routine around that knowledge.']] },
  '/videos': { title: 'Videos', intro: 'Discover routines, product tips and stories from the Nativechild community.', sections: [['Coming Soon', 'New Nativechild videos and tutorials will be added here.']] },
  '/where-to-buy': { title: 'Where To Buy', intro: 'Find Nativechild products online and at selected retail partners.', sections: [['Shop Online', 'Browse the full Nativechild collection through our online shop or visit one of our partner retailers.']] },
  '/affiliate-registration': { title: 'Affiliate Registration', intro: 'Join the Nativechild affiliate community and share products you believe in.', sections: [['Become An Affiliate', 'Register your interest and our team will be in touch with the next steps.']] },
  '/hair-beauty-bar': { title: 'Hair & Beauty Bar', intro: 'Book an appointment for hair and beauty services with the Nativechild team.', sections: [['Appointments', 'Choose a salon and book your next service through our booking partners.']] },
};

function RoutePage({ title, intro, sections, products: pageProducts, shopPage = false, categoryPage = false, onAddToCart }) {
  return (
    <div className={`page route-page${shopPage ? ' shop-page' : ''}${categoryPage ? ' category-products-page' : ''}`}>
      <div className="route-page-inner">
        {categoryPage && <section className="category-products-hero" style={{ backgroundImage: `url(${categoryHair})` }} aria-label={`${title} hero image`}><h1>{title.replace(' Products', '')}</h1></section>}
        <p className="eyebrow">{shopPage ? '100% Plant Based Hair and Body Care' : 'Nativechild'}</p>
        {!categoryPage && <h1>{shopPage ? 'Shop Online' : title}</h1>}
        <p className="route-page-intro">{intro}</p>
        {shopPage && <div className="shop-page-description">
          <h2>All our products are always responsibly sourced, and ethically created.</h2>
          <p>We believe in a holistic approach of taking care of hair and beauty needs. We select the <strong>best oils &amp; ingredients</strong> to ensure peace of mind and to help you achieve your healthy hair &amp; beauty goals!</p>
        </div>}
        {shopPage && <div className="shop-results-bar"><span>Showing 1–30 of 65 results</span><label>Sort <select aria-label="Shop order"><option>Default sorting</option><option>Sort by popularity</option><option>Sort by latest</option><option>Sort by price: low to high</option><option>Sort by price: high to low</option></select></label></div>}
        {categoryPage && <div className="category-products-heading"><h2>{title.replace(' Products', '')}</h2><p>{intro}</p></div>}
        {categoryPage && <div className="shop-results-bar"><span>Showing 1-24 of 46 results</span><label>Sort <select aria-label="Sort products"><option>Default sorting</option><option>Sort by popularity</option><option>Sort by latest</option><option>Sort by price: low to high</option><option>Sort by price: high to low</option></select></label></div>}
        {pageProducts && <div className="featured-product-grid route-product-grid">
          {pageProducts.map((product) => (
            <article key={product.name} className="featured-product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="featured-product-card-body">
                <h3>{product.name}</h3>
                <div className="product-footer"><span className="wc-price featured-price">{product.price}</span><button type="button" className="wc-add-to-cart featured-add-to-cart" onClick={() => onAddToCart(product)}>Add to Cart</button></div>
              </div>
            </article>
          ))}
        </div>}
        <div className="route-page-sections">
          {sections.map(([heading, copy]) => <section key={heading} className="route-page-section"><h2>{heading}</h2><p>{copy}</p></section>)}
        </div>
        {!shopPage && !categoryPage && <Link className="button route-back-button" to="/">Back to home</Link>}
      </div>
    </div>
  );
}

function App() {
  const { pathname } = useLocation();
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem('nativechild-cart') || '[]'); } catch { return []; }
  });
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.name === product.name);
      const nextCart = existing
        ? currentCart.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item)
        : [...currentCart, { ...product, quantity: 1 }];
      window.localStorage.setItem('nativechild-cart', JSON.stringify(nextCart));
      return nextCart;
    });
  };
  const updateQuantity = (productName, quantity) => {
    const nextQuantity = Math.max(0, Number.parseInt(quantity, 10) || 0);
    setCart((currentCart) => {
      const nextCart = currentCart
        .map((item) => item.name === productName ? { ...item, quantity: nextQuantity } : item)
        .filter((item) => item.quantity > 0);
      window.localStorage.setItem('nativechild-cart', JSON.stringify(nextCart));
      return nextCart;
    });
  };
  const renderPage = (page) => <HomePage pageContent={page} cart={cart} onAddToCart={addToCart} onUpdateQuantity={updateQuantity} />;
  const categoryMatch = pathname.match(/^\/products\/(haircare|bodycare|combos|accessories)$/);
  if (pathname === '/' || pathname === '') return <HomePage cart={cart} onAddToCart={addToCart} onUpdateQuantity={updateQuantity} />;
  if (pathname === '/kurl-care-guide') return renderPage(<KurlCarePage />);
  if (pathname === '/where-to-buy') return renderPage(<WhereToBuyPage />);
  if (pathname === '/videos') return renderPage(<VideosPage />);
  if (pathname === '/about-us') return renderPage(<AboutPage />);
  if (pathname === '/affiliate-registration') return renderPage(<AffiliatePage />);
  if (pathname === '/community-initiative') return renderPage(<CommunityInitiativePage />);
  if (pathname === '/frequently-asked-questions') return renderPage(<FaqPage />);
  if (pathname === '/my-account') return renderPage(<MyAccountPage />);
  if (pathname === '/cart') return renderPage(<CartPage />);
  if (pathname === '/checkout') return renderPage(<CheckoutPage />);
  if (pathname === '/careers') return renderPage(<CareersPage />);
  if (pathname === '/blog') return renderPage(<BlogPage />);
  if (pathname === '/contact-us') return renderPage(<ContactPage />);
  if (pathname === '/hair-beauty-bar') return renderPage(<HairBeautyPage />);
  if (pathname === '/shop' || categoryMatch) {
    const category = categoryMatch?.[1];
    const title = category ? `${category[0].toUpperCase()}${category.slice(1)} Products` : 'Shop Nativechild';
    return renderPage(<RoutePage categoryPage={Boolean(category)} shopPage={pathname === '/shop'} title={title} intro={category === 'haircare' ? 'Our products are designed to assist hair growth, restore moisture, reduce breakage and provide the nourishment your hair needs to thrive.' : 'Explore natural-based haircare and bodycare made with care for you and the world around you.'} sections={[]} products={pathname === '/shop' ? shopProducts : category === 'haircare' ? haircareProducts : category === 'bodycare' ? products.slice(2) : products} />);
  }
  const page = routePages[pathname] || { title: 'Nativechild', intro: 'Natural-based haircare and bodycare for your everyday ritual.', sections: [['Page Not Found', 'The page you requested could not be found. Return home to continue exploring Nativechild.']] };
  return renderPage(<RoutePage {...page} />);
}

export default App;

