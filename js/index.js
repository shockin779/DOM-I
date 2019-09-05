const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Set shortcuts for the object
let cta = siteContent.cta;
let contact = siteContent.contact;
let footer = siteContent.footer;


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Update the img src for the cta img
let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//Update middle image
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Grab empty anchors in nav bar
let navItems = document.querySelectorAll('nav a');

//Set text content of anchors to the nav items
navItems.forEach( (nav, index) => {
  nav.textContent = siteContent.nav[`nav-item-${index + 1}`];
});


//Grab cta section
let ctaSection = document.querySelector('.cta');

//Set h1 in cta section
ctaSection.querySelector('h1').innerText = cta.h1;

//Set button text
ctaSection.querySelector('button').innerText = cta.button;


//Change color of nav items to green
navItems.forEach( nav => nav.style.color = 'green' );

//Grab main content
let mainContent = document.querySelector('.main-content');

//Create node list with all text-sections
let mainSections = mainContent.querySelectorAll('.text-content');


//Create the text content
createTextContent(mainSections[0], 'features');
createTextContent(mainSections[1], 'about');
createTextContent(mainSections[2], 'services');
createTextContent(mainSections[3], 'product');
createTextContent(mainSections[4], 'vision');


//Function used to create the text content of the main section
function createTextContent(el, section) {
  //Set h4's
  el.children[0].textContent = siteContent['main-content'][`${section}-h4`];

  //Set p's
  el.children[1].textContent = siteContent['main-content'][`${section}-content`];
}

// Get contact section
let contactSection = document.querySelector('.contact');

contactSection.children[0].textContent = contact['contact-h4'];
contactSection.children[1].textContent = contact.address;
contactSection.children[2].textContent = contact.phone;
contactSection.children[3].textContent = contact.email;


// Get footer section
let footerSection = document.querySelector('footer p');

footerSection.textContent = footer.copyright;


//Prepend nav item
let navBar = document.querySelector('nav');

let firstNav = document.createElement('a');
firstNav.setAttribute('href', '#');
firstNav.style.color = 'green';
firstNav.textContent = 'First';

navBar.prepend(firstNav);

//Append nav item
let lastNav = document.createElement('a');
lastNav.setAttribute('src', '#');
lastNav.style.color = 'green';
lastNav.textContent = 'Last';

navBar.appendChild(lastNav);