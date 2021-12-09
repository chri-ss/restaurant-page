import {pageLoad} from './scripts/page-load.js';
import{homeLoad} from './scripts/home.js';
import {menuLoad} from './scripts/menu.js';
import {servicesLoad} from './scripts/services.js';
import {reviewsLoad} from './scripts/reviews.js';
import {aboutLoad} from './scripts/about.js';
import {contactLoad} from './scripts/contact.js';
import './style.css';
import './reset.css';

pageLoad();

const mainContainer = document.querySelector('.main-container');

const home  = document.querySelector('.Home');
const menu = document.querySelector('.Menu');
const services = document.querySelector('.Services');
const reviews = document.querySelector('.Reviews');
const about = document.querySelector('.About');
const contact = document.querySelector('.Contact');

home.addEventListener('click', () => {
    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    homeLoad();
});

menu.addEventListener('click', () => {
    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    menuLoad();
});

services.addEventListener('click', () => {
    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    servicesLoad();
});

reviews.addEventListener('click', () => {
    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    reviewsLoad();
});

about.addEventListener('click', () => {
    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    aboutLoad();
});

contact.addEventListener('click', () => {
    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    contactLoad();
});
