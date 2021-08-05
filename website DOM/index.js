export const Header = (() =>{
const banner = document.querySelector('.banner');
const content = document.createElement('div');
content.classList.add ('navbar');

const menuBar = document.createElement('ul');
const home = document.createElement('li');
home.textContent = 'Home';
const contact = document.createElement('li');
const newpage = document.createElement('a')
newpage.classList.add('newpage')
newpage.href = "contact.html"
newpage.textContent = 'Contact';

   //   background image
const mainContent  = document.createElement('div');
mainContent.classList.add('maincontent');
const section = document.createElement('section');
section.classList.add('background')
const h1 = document.createElement('h1');
h1.textContent = 'SURFING MASTERS'

     /*adding the pictures*/
const contentWrapper = document.createElement('div');
contentWrapper.classList.add('contentwrapper');

const firstpic = document.createElement('div');
firstpic.classList.add('column');
const para1 = document.createElement('div');
para1.classList.add('para');
para1.textContent = "SURF LESSONS"
const img1 = document.createElement('div');
img1.classList.add('leftSection');

const secondpic = document.createElement('div');
secondpic.classList.add('column');
const para2 = document.createElement('div');
para2.classList.add('para');
para2.textContent = "SURFING COURSES"
const img2 = document.createElement('div');
img2.classList.add('middleSection');

const thirdpic = document.createElement('div');
thirdpic.classList.add('column');
const para3 = document.createElement('div');
para3.classList.add('para');
para3.textContent = "OUR SCHOOL"
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
copyright.textContent = 'Copyright ©️ 2021 Surfing Masters.All Rights Reversed'

   // append navbar to the parent banner
menuBar.appendChild(home);
contact.appendChild(newpage)
menuBar.appendChild(contact);
content.appendChild(menuBar);
banner.appendChild(content);

  //append main content
mainContent.appendChild(section);
section.appendChild(h1)
banner.appendChild(mainContent);

//append the pictures
firstpic.appendChild(img1);
img1.appendChild(para1);
contentWrapper.appendChild(firstpic);
contentWrapper.appendChild(secondpic);
secondpic.appendChild(img2);
img2.appendChild(para2);
contentWrapper.appendChild(thirdpic)
thirdpic.appendChild(img3);
img3.appendChild(para3)
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
