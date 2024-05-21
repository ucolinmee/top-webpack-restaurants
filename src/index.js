import './style.css';
import Icon from './pancakes1.jpg';

function component() {
    const element = document.createElement('div');

    const bgImg = new Image();
    bgImg.src = Icon;

    content.appendChild(bgImg);

    return element;
}

const content = document.getElementById("content");
content.appendChild(component());