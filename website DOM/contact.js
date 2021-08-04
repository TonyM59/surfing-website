export const Contact = (() =>{   
    const banner2 = document.querySelector('.banner2');
    const content = document.createElement('div');
    content.classList.add ('navbar');
    const menuBar = document.createElement('ul');
    const home = document.createElement('li');
    const aboutUs = document.createElement('li');
    const product = document.createElement('li');
    const contact = document.createElement('li');
    
       /*   background image
    const mainContent  = document.createElement('div');
    mainContent.classList.add('maincontent');
    const section = document.createElement('section');
    section.classList.add('background')
    const h1 = document.createElement('h1');*/


    const contactForm = document.createElement('div')
    contactForm.classList.add('contactForm')
    const h1 = document.createElement('h1')
    h1.textContent = 'Contact us'
    h1.classList.add('h1')
    const txtb1 = document.createElement('div')
    const label1 = document.createElement('label')
    label.textContent = 'Full Name:'
    const input1 = document.createElement('input')
    //input.textContent = 'Enter Your Name'
    
    const txtb2 = document.createElement('div')
    const label2 = document.createElement('label')
    label.textContent = 'Email:'
    const input2 = document.createElement('input')
    //input.textContent = 'Enter Your Email'
    
    const txtb3 = document.createElement('div')
    const label3 = document.createElement('label')
    label.textContent = 'Phone Number:'
    const input3 = document.createElement('input')
    //input.textContent = 'Enter Your Phone Number'
    
    const txtb4 = document.createElement('div')
    const label4 = document.createElement('label')
    label.textContent = 'Message:'
    const textArea = document.createElement('textarea')
    
    const btn = document.createElement('a')
    btn.textContent = 'Send'
    
    txtb1.appendChild(label1)
    txtb1.appendChild(input1)
    txtb2.appendChild(label2)
    txtb2.appendChild(input2)
    txtb3.appendChild(label3)
    txtb3.appendChild(input3)
    txtb4.appendChild(label4)
    txtb4.appendChild(textArea)
    contactForm.appendChild(h1)
    contactForm.appendChild(txtb1)
    contactForm.appendChild(txtb2)
    contactForm.appendChild(txtb3)
    contactForm.appendChild(txtb4)
    contactForm.appendChild(btn)
    document.body.appendChild(h1)
    document.body.appendChild(txtb1)
    document.body.appendChild(label)
    document.body.appendChild(input1)
    document.body.appendChild(contactForm)


/*create contact form
const h1 = document.createElement('h1');
h1.textContent = 'Contact Form'
const paragraph = document.createElement('p')
paragraph.textContent = 'Click below to fill the form'
const button = document.createElement('button')
button.textContent = 'Click here'

document.body.appendChild(h1)
document.body.appendChild(paragraph)
document.body.appendChild(button)*/


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
aboutUs.textContent = 'About us';
product.textContent = 'Product';
contact.textContent = 'Contact';

copyright.textContent = 'Copyright ©️ 2021 Master Surfing.All Rights Reversed'

   // append navbar to the parent banner
menuBar.appendChild(home);
menuBar.appendChild(aboutUs);
menuBar.appendChild(product);
menuBar.appendChild(contact);
content.appendChild(menuBar);
banner2.appendChild(content)

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
banner2.appendChild(footer)

           




return{banner2}

})();