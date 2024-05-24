import Icon from '../images/home.png';

const loadHome = () => {
    const content = document.getElementById('content');

    const div = document.createElement('div');
    div.id = 'home';

    // img
    const myIcon = new Image();
    myIcon.src = Icon;
    div.appendChild(myIcon);

    // h1
    const headline = document.createElement('h1');
    headline.innerHTML = "Welcome to Pekka's Pancakes";
    div.appendChild(headline);

    // p
    const para = document.createElement('p');
    para.innerHTML = "Come find out what makes Pekka so obsessed over pancakes. Be it sweet, savoury or metallic... Pekka's Pancakes has something for your taste buds! "
    div.appendChild(para);

    content.appendChild(div);
}

export default loadHome;


{/* 
<div id="content">
    <div id="home">
        <img src="" alt="">
        <h1>Welcome to Pekka's Pancakes</h1>
        <p>Come find out what makes Pekka so obsessed...</p>
    </div>
</div> 
*/}