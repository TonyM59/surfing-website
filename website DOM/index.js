export const Header = (() =>{
const banner = document.querySelector('.banner');
const content = document.createElement('div');
content.classList.add ('navbar');
const menuBar = document.createElement('ul');
const home = document.createElement('li');
const aboutUs = document.createElement('li');
const product = document.createElement('li');
const contact = document.createElement('li');
const mainContent  = document.createElement('div');
mainContent.classList.add('maincontent');
const section = document.createElement('section');
section.classList.add('background')
const h1 = document.createElement('h1');
/*image.classList.add('background')*/


home.textContent = 'Home';
aboutUs.textContent = 'About us';
product.textContent = 'Product';
contact.textContent = 'Contact';

h1.textContent = 'MASTER SURFING'

/*image.src = 'images/logo.jpg'*/

/*document.body.style.backgroundImage="url('images/photo1.jpg');"*/


menuBar.appendChild(home);
menuBar.appendChild(aboutUs);
menuBar.appendChild(product);
menuBar.appendChild(contact);
content.appendChild(menuBar);
banner.appendChild(content);
mainContent.appendChild(section);
section.appendChild(h1)
banner.appendChild(mainContent); 

return{banner}

})();
