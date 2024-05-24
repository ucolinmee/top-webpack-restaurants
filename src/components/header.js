import Icon from '../images/header-logo.jpg';

const loadHeader = () => {
    const header = document.querySelector('header');

    const navSections = [
        'Home',
        'Menu',
        'Contact'
    ]

    const div = document.createElement('div');

    const myIcon = new Image();
    myIcon.src = Icon;
    div.appendChild(myIcon);

    const nav = document.createElement('nav');

    // Add each section to the navbar
    navSections.forEach((section) => {
        const button = document.createElement('button');
        button.id = section.toLowerCase();
        button.innerHTML = section;
        nav.appendChild(button);
    })

    header.appendChild(div);
    header.appendChild(nav);
}

export default loadHeader;

{/* 
<header>
    <div>
        <img src="" alt="">
    </div>
    <nav>
        <button>Home</button>
        <button>Menu</button>
        <button>Contact</button>
    </nav>
</header> 
*/}