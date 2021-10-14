const resource = [

  /* --- CSS --- */
  '/justinbezanson.github.io/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/justinbezanson.github.io/assets/js/dist/home.min.js',
  '/justinbezanson.github.io/assets/js/dist/page.min.js',
  '/justinbezanson.github.io/assets/js/dist/post.min.js',
  '/justinbezanson.github.io/assets/js/dist/categories.min.js',
  '/justinbezanson.github.io/assets/js/data/search.json',
  '/justinbezanson.github.io/app.js',
  '/justinbezanson.github.io/sw.js',

  /* --- HTML --- */
  '/justinbezanson.github.io/index.html',
  '/justinbezanson.github.io/404.html',
  
    '/justinbezanson.github.io/categories/',
  
    '/justinbezanson.github.io/tags/',
  
    '/justinbezanson.github.io/archives/',
  
    '/justinbezanson.github.io/about/',
  

  /* --- Favicons --- */
  

  '/justinbezanson.github.io/assets/img/favicons/android-chrome-192x192.png',
  '/justinbezanson.github.io/assets/img/favicons/android-chrome-512x512.png',
  '/justinbezanson.github.io/assets/img/favicons/apple-touch-icon.png',
  '/justinbezanson.github.io/assets/img/favicons/favicon-16x16.png',
  '/justinbezanson.github.io/assets/img/favicons/favicon-32x32.png',
  '/justinbezanson.github.io/assets/img/favicons/favicon.ico',
  '/justinbezanson.github.io/assets/img/favicons/mstile-150x150.png',
  '/justinbezanson.github.io/assets/img/favicons/site.webmanifest',
  '/justinbezanson.github.io/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

