import './style.css';
import loadHeader from './components/header';
import loadHome from './components/home';
import loadMenu from './components/menu';
import loadContact from './components/contact';

const DisplayManager = () => {

    const content = document.getElementById('content');

    var tabs;

    const populateTabs = () => {
        tabs = {
            home: {
                button: document.getElementById('home'),
                load: loadHome
            },
            menu: {
                button: document.getElementById('menu'),
                load: loadMenu
            },
            contact: {
                button: document.getElementById('contact'),
                load: loadContact
            }
        }
    }

    const updatePage = (activeTab) => {
        document.querySelector('.active').classList.remove('active');
        tabs[activeTab].button.classList.add('active');

        content.innerHTML = '';
        tabs[activeTab].load();
    }

    const clickHandler = (e) => {
        if (e.target.classList.value !== 'active') {
            updatePage(e.target.id);
        }
    }

    const init = () => {
        loadHeader();
        document.getElementById('home').classList.add('active');
        populateTabs();
        updatePage('home');

        var btns = document.querySelectorAll('button');
        btns.forEach((btn) => {
            btn.addEventListener('click', clickHandler);
        })
    }

    return { init };
} 

DisplayManager().init();