import Icon from '../images/mini.jpg';

const loadHeader = () => {
    const header = document.querySelector('header');

    const navSections = [
        'Home',
        'Menu',
        'Contact'
    ]

    const nav = document.createElement('nav');

    // Add the image to navbar
    const myIcon = new Image();
    myIcon.src = Icon;
    nav.appendChild(myIcon);

    // Add each section to the navbar
    navSections.forEach((section) => {
        const button = document.createElement('button');
        button.innerHTML = section;
        nav.appendChild(button);
    })

    header.appendChild(nav);
}

export default loadHeader;