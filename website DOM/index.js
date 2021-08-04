export const Header = (() =>{
const banner = document.querySelector('.banner');
const content = document.createElement('div');
content.classList.add ('navbar');
const menuBar = document.createElement('ul');
const home = document.createElement('li');
//const aboutUs = document.createElement('li');
//const product = document.createElement('li');
const contact = document.createElement('li');


   //   background image
const mainContent  = document.createElement('div');
mainContent.classList.add('maincontent');
const section = document.createElement('section');
section.classList.add('background')
const h1 = document.createElement('h1');

     /*adding the pictures*/
const contentWrapper = document.createElement('div');
contentWrapper.classList.add('contentwrapper');

const firstpic = document.createElement('div');
firstpic.classList.add('column');
const img1 = document.createElement('div');
img1.classList.add('leftSection');

const secondpic = document.createElement('div');
secondpic.classList.add('column');
const img2 = document.createElement('div');
img2.classList.add('middleSection');

const thirdpic = document.createElement('div');
thirdpic.classList.add('column');
const img3 = document.createElement('div');
img3.classList.add('rightSection');


//adding footer
const footer = document.createElement('footer');
footer.classList.add('footer');

// adding facebook icon
const icons = document.createElement('p');
icons.classList.add('icons')
const fbLink= document.createElement('a');
const fbook= document.createElement('i');
fbook.className = 'fa fa-facebook-official'
fbLink.href = "https://www.facebook.com/surfemporium"

//adding twitter icon
const twitterLink= document.createElement('a');
const twitter= document.createElement('i');
twitter.className = 'fa fa-twitter'
twitterLink.href = "https://twitter.com/surfemporium"
//adding instargram icon
const instagramLink= document.createElement('a');
const instagram= document.createElement('i');
instagram.className = 'fa fa-instagram'
instagramLink.href = "https://www.instagram.com/surfemporium/"



// adding copyright
const copyright = document.createElement('p');


home.textContent = 'Home';
//aboutUs.textContent = 'About us';
//product.textContent = 'Product';
contact.textContent = 'Contact';

h1.textContent = 'SURFING MASTERS'


copyright.textContent = 'Copyright ©️ 2021 Master Surfing.All Rights Reversed'

   // append navbar to the parent banner
menuBar.appendChild(home);
//menuBar.appendChild(aboutUs);
//menuBar.appendChild(product);
menuBar.appendChild(contact);
content.appendChild(menuBar);
banner.appendChild(content);

  //append main content
mainContent.appendChild(section);
section.appendChild(h1)
banner.appendChild(mainContent);

//append the three pictures
firstpic.appendChild(img1)
contentWrapper.appendChild(firstpic);
contentWrapper.appendChild(secondpic);
secondpic.appendChild(img2);
contentWrapper.appendChild(thirdpic)
thirdpic.appendChild(img3);
mainContent.appendChild(contentWrapper);


// append icons
icons.appendChild(fbook);
icons.appendChild(fbLink);
fbLink.appendChild(fbook);
icons.appendChild(twitterLink);
icons.appendChild(twitter);
twitterLink.appendChild(twitter);
icons.appendChild(instagramLink);
icons.appendChild(instagram);
instagramLink.appendChild(instagram);
footer.appendChild(icons);
footer.appendChild(copyright);
banner.appendChild(footer);



return{banner}

})();
