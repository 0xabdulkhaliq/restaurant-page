import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('header');

    const headerImage = document.createElement('img');
    headerImage.src = '../src/images/header.webp';
    headerImage.alt = 'Junkier Foodies';

    const nav = document.createElement('nav');
    nav.append(
        createButton('Home'),
        createButton('Menu'),
        createButton('Contact')
    )

    header.append(headerImage, nav)

    return header
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = 'Copyright &copy; 2023 - <a class="attribution__link" href="https://github.com/0xabdulkhalid" target="_blank" rel="noopener noreferrer">0xabdulkhalid</a>'

    return footer
}

function createMain() {
    const main = document.createElement('main')
    return main
}

function createButton(innerText){
    const btn = document.createElement('button');
    btn.textContent = innerText

    btn.addEventListener('click', (e)=>{
        if (!e.target.classList.contains('active')) {
            activateBtns(e.target)
            
            if (e.target.textContent == 'Home') {
                loadHome();
            } 
            if (e.target.textContent == 'Menu') {
                loadMenu();
            } 
            if (e.target.textContent == 'Contact') {
                loadContact();
            }
        }
    })

    return btn
}

function activateBtns(btn) {
    const buttonElements = document.querySelectorAll('button');

    buttonElements.forEach((btn) => {
        if (btn != this) {
            btn.classList.remove('btn--active');
        }
    });

    btn.classList.add('btn--active')
}

(function addElements() {
    const body = document.querySelector('body')
    body.append(createHeader(), createMain(), createFooter())

    loadHome()
})();