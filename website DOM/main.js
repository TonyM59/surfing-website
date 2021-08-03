import {Header} from '-/index.js';

const body = document.querySelector('body');
const banner = document.querySelector('#banner');

body.style.padding = "0";
body.style.margin = "0";

banner.appendChild(Header.banner);