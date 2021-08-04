import {Header} from '-/index.js';
import { Contact } from './contact.js';

const body = document.querySelector('body');
const banner = document.querySelector('.banner');

const body = document.querySelector('body')
const banner2 = document.querySelector('.banner2')

body.style.padding = "0";
body.style.margin = "0";

banner.appendChild(Header.banner);
banner2.appendChild(Contact.banner2);