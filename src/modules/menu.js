function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('main__menu');

    menu.append(
        createMenuItem('burger'),
        createMenuItem('buritto'),
        createMenuItem('fries'),
        createMenuItem('pizza'),
        createMenuItem('taco')
    );

    return menu;
}

function createMenuItem(menuItem){
    const item = document.createElement('div');
    item.classList.add('main__menu-items');

    const imgOfItem = document.createElement('img');
    imgOfItem.src = `../src/images/${menuItem}.webp`;
    imgOfItem.alt = "";

    const nameOfItem = document.createElement('p');
    nameOfItem.classList.add('menu__item-name');
    nameOfItem.textContent = menuItem;

    item.append(imgOfItem, nameOfItem);
    
    return item;
}

function loadMenu(){
    const mainContainer = document.querySelector('main');
    mainContainer.textContent = "";
    mainContainer.append(createMenu());
}

export default loadMenu;