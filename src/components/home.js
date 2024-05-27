import Icon from '../images/home.png';
import TikTok from '../images/icons/tiktok.svg';
import Instagram from '../images/icons/instagram.png';
import Twitter from '../images/icons/twitter.png'; 

const loadHome = () => {
    const content = document.getElementById('content');

    // *** <div class="home"> ***
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    // img
    const myIcon = new Image();
    myIcon.src = Icon;
    homeDiv.appendChild(myIcon);

    // h1
    const headline = document.createElement('h1');
    headline.innerHTML = "Welcome to Pekka's Pancakes";
    homeDiv.appendChild(headline);

    // p
    const para = document.createElement('p');
    para.innerHTML = "Come find out what makes Pekka so obsessed over pancakes. Be it sweet, savoury or metallic... Pekka's Pancakes has something for your taste buds! "
    homeDiv.appendChild(para);

    // *** <div class="socials"> ***
    const socialsDiv = document.createElement('div');
    socialsDiv.classList.add('socials');

    // h1
    const findUs = document.createElement('h1');
    findUs.innerHTML = "Find Us";
    socialsDiv.appendChild(findUs);

    // <div>
    const faviconsDiv = document.createElement('div');

    const faviconsList = [Instagram, Twitter, TikTok];

    faviconsList.forEach((icon) => {
        const social = document.createElement('img');
        social.src = icon;
        faviconsDiv.appendChild(social);
    })
    socialsDiv.appendChild(faviconsDiv);

    content.appendChild(homeDiv);
    content.appendChild(socialsDiv);
}

export default loadHome;


{/* 
<div id="content">
    <div class="home">
        <img src="" alt="">
        <h1>Welcome to Pekka's Pancakes</h1>
        <p>Come find out what makes Pekka so obsessed...</p>
    </div>
    <div class="socials">
        <h1>Find us</h1>
        <div>
            <img>Instagram
            <img>Twitter
            <img>Tiktok
        </div>
    </div>
</div> 
*/}