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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.querySelectorAll("a");
// console.log(navLinks)
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

//selecting header text 
const firstHeader = document.querySelector("h1")
firstHeader.textContent = siteContent["cta"]["h1"]

//selecting button
const headerButton = document.querySelector("button");
headerButton.textContent = siteContent["cta"]["button"]

//selecting header image
const headerImage = document.getElementById("cta-img")
headerImage.setAttribute('src', siteContent["cta"]["img-src"])

//selecting all h4 and p tags
const H4Text = document.querySelectorAll("h4")
const PTags = document.querySelectorAll("p")

H4Text[0].textContent = siteContent["main-content"]["features-h4"]
H4Text[1].textContent = siteContent["main-content"]["about-h4"]
H4Text[2].textContent = siteContent["main-content"]["services-h4"]
H4Text[3].textContent = siteContent["main-content"]["product-h4"]
H4Text[4].textContent = siteContent["main-content"]["vision-h4"]

PTags[0].textContent = siteContent["main-content"]["features-content"]
PTags[1].textContent = siteContent["main-content"]["about-content"]
PTags[2].textContent = siteContent["main-content"]["services-content"]
PTags[3].textContent = siteContent["main-content"]["product-content"]
PTags[4].textContent = siteContent["main-content"]["vision-content"]

//selecting the middle image
const middleImage = document.querySelector(".middle-img")
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//adding in the contact header and text
H4Text[5].textContent = siteContent["contact"]["contact-h4"]

PTags[5].textContent = siteContent["contact"]["address"]
PTags[6].textContent = siteContent["contact"]["phone"]
PTags[7].textContent = siteContent["contact"]["email"]
