export const Contact = (() =>{   
    const banner2 = document.querySelector('.banner2');
    const content = document.createElement('div');
    content.classList.add ('navbar');
    const menuBar = document.createElement('ul');
    const home = document.createElement('li');
    //const aboutUs = document.createElement('li');
    //const product = document.createElement('li');
    const contact = document.createElement('li');
    

    //Creating a contact form
    const contactForm = document.createElement('div')
    contactForm.classList.add('contactForm')
    const h1 = document.createElement('h1')
    h1.textContent = 'Contact us'
    h1.classList.add('h1')
    const txtb1 = document.createElement('div')
    txtb1.classList.add('txtb1')
    const label1 = document.createElement('label1')
    label1.classList.add('label1')
    label1.textContent = 'Full Name:'
    const input1 = document.createElement('input1')
    input1.classList.add('input1')
    //input.textContent = 'Enter Your Name'
    
    const txtb2 = document.createElement('div')
    txtb2.classList.add('txtb2')
    const label2 = document.createElement('label2')
    label2.classList.add('label2')
    label2.textContent = 'Email:'
    const input2 = document.createElement('input2')
    input2.classList.add('input2')
    //input.textContent = 'Enter Your Email'
    
    const txtb3 = document.createElement('div')
    txtb3.classList.add('txtb3')
    const label3 = document.createElement('label3')
    label3.classList.add('label3')
    label3.textContent = 'Phone Number:'
    const input3 = document.createElement('input3')
    //input.textContent = 'Enter Your Phone Number'
    
    const txtb4 = document.createElement('div')
    txtb4.classList.add('txtb4')
    const label4 = document.createElement('label4')
    label4.classList.add('label4')
    label4.textContent = 'Message:'
    const textArea = document.createElement('textarea')
    
    const btn = document.createElement('a')
    btn.classList.add('btn')
    btn.textContent = 'Send'


    //adding footer
const footer = document.createElement('footer');
footer.classList.add('footer2');

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

copyright.textContent = 'Copyright ©️ 2021 Master Surfing.All Rights Reversed'

   // append navbar to the parent banner
menuBar.appendChild(home);
//menuBar.appendChild(aboutUs);
//menuBar.appendChild(product);
menuBar.appendChild(contact);
content.appendChild(menuBar);

    //Append contact form
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
    banner2.appendChild(contactForm)
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