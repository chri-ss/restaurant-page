import {pageLoad} from './page-load.js';
import{homeLoad} from './home.js';
import {menuLoad} from './menu.js';
import {servicesLoad} from'./services.js';
import './style.css';
import './reset.css';

pageLoad();

const mainContainer = document.querySelector('.main-container');
const header = document.querySelector('.header');
const blurbAndCat = document.querySelector('.blurb-and-cat');

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
