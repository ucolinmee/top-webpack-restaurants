const loadHome = () => {
    const content = document.getElementById('content');

    const tempDiv = document.createElement('div');
    tempDiv.classList.add('box');

    // Add headline
    const headline = document.createElement('h1');
    headline.innerHTML = "Welcome to Pekka's Pancakes";
    tempDiv.appendChild(headline);

    const para = document.createElement('p');
    para.innerHTML = "Come find out what makes Pekka so obsessed over pancakes. Be it sweet, savoury or metallic... Pekka's Pancakes has something for your taste buds!"
    tempDiv.appendChild(para);

    content.appendChild(tempDiv);
}

export default loadHome;