const loadContact = () => {
    const content = document.getElementById('content');

    // <div class="contact-details">
    const details = document.createElement('div');
    details.classList.add('contact-details');

    // <img src="./images/email.svg"></img>
    const emailIcon = document.createElement('img');
    emailIcon.src = require('../images/email.svg');
    details.appendChild(emailIcon);

    // <p>Email</p>
    const emailPara = document.createElement('p');
    emailPara.innerHTML = 'FakeEmail123@pp.com';
    details.appendChild(emailPara);

    // <img src="./images/phone.svg"></img>
    const phoneIcon = document.createElement('img');
    phoneIcon.src = require('../images/phone.svg');
    details.appendChild(phoneIcon);

    // <p>Phone</p>
    const phonePara = document.createElement('p');
    phonePara.innerHTML = '9876 5432';
    details.appendChild(phonePara);

    // <img src="./images/location-point.svg"></img>
    const locationIcon = document.createElement('img');
    locationIcon.src = require('../images/location-point.svg');
    details.appendChild(locationIcon);

    // <p>Location</p>
    const locationPara = document.createElement('p');
    locationPara.innerHTML = 'I wish this was a real place...';
    details.appendChild(locationPara);

    // <img>
    const img = document.createElement('img');
    img.src = require('../images/contact.jpg');
    img.id = 'contact-img';

    content.appendChild(details);
    content.appendChild(img);
}

export default loadContact;

{/* 
<div class="contact-details">
    <img src="./images/email.svg">
    <p>Email</p>
    <img src="./images/phone.svg">
    <p>Phone num</p>
    <img src="./images/location-point.svg">
    <p>Address</p>
</div>
<img src="" alt=""></img> 
*/}
