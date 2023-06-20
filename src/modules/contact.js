function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('main__contact');

    const mapImage = document.createElement('img');
    mapImage.src = './images/map.webp';
    mapImage.alt = '';

    contact.append(
        createParagraph('Phone ☎: 123 456 789'),
        createParagraph('Location 🏠: Hollywood Boulevard 42, Los Angeles, USA'),
        mapImage
    )

    return contact
}

function createParagraph(innerText){
    const paragraph = document.createElement('p');
    paragraph.textContent = innerText

    return paragraph
}

function loadContact(){
    const main = document.querySelector('main');
    main.textContent = "";

    main.append(createContact())
}

export default loadContact;