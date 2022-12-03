import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

const content = document.querySelector("#content");

const headerImg = document.createElement("img");
headerImg.setAttribute('id', 'header');
headerImg.setAttribute('src', './header.jpg');

const headerDiv = document.createElement("div");
headerDiv.classList.add("header-div");

const menu = document.createElement("h1");
menu.classList.add("menu");
menu.classList.add("passive");
menu.innerHTML = "Menu";

const header = document.createElement("h1");
header.classList.add("home");
header.classList.add("active");
header.innerHTML = "Restaurant de Cuccittini";

const contact = document.createElement("h1");
contact.classList.add("contact");
contact.classList.add("passive");
contact.innerHTML = "Contact";

headerDiv.appendChild(menu);
headerDiv.appendChild(header);
headerDiv.appendChild(contact);

const staticPart = document.createElement("div");
staticPart.classList.add("static-part");
staticPart.appendChild(headerImg);
staticPart.appendChild(headerDiv);

content.appendChild(staticPart);

const div = document.createElement("div");
div.classList.add("context");
content.appendChild(div);

homePage();

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.onclick = homePage;

menuButton.onclick = menuPage;

contactButton.onclick = contactPage;