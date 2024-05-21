const loadHome = () => {
    const content = document.getElementById('content');

    // Add image div
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('bgImg');

    // Add headline
    const headline = document.createElement('h1');
    headline.innerHTML = "Welcome to Pekka's Pancakes";

    const para = document.createElement('p');
    para.innerHTML = "Come find out what makes Pekka so obsessed over pancakes. Be it sweet, savoury or metallic... Pekka's Pancakes has something for your taste buds!"

    content.appendChild(imgDiv);
    content.appendChild(headline);
    content.appendChild(para);
}

export default loadHome;