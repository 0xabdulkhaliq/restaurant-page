function createHome(){
    const home = document.createElement('div');
    home.classList.add('main__home')

    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Best fast foods in your country <span class="main__line-break"></span> Made with passion since 1923'
    
    const chefImageContainer = document.createElement('div');
    chefImageContainer.classList.add('main__home-image');

    home.append(paragraph, chefImageContainer);

    return home;
}

function loadHome(){
    const mainContainer = document.querySelector('main');
    mainContainer.textContent = '';
    mainContainer.append(createHome());
}

export default loadHome;