import {Header} from '-/index.js';
import { Contact } from './contact.js';

const body = document.querySelector('body');
const banner = document.querySelector('.banner');
<<<<<<< HEAD
=======

const body = document.querySelector('body')
const banner2 = document.querySelector('.banner2')
>>>>>>> cf090f3c50bf852d2d3d0779568d22cff97ee016

body.style.padding = "0";
body.style.margin = "0";

banner.appendChild(Header.banner);
banner2.appendChild(Contact.banner2);