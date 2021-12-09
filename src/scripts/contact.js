export function contactLoad() {
    const mainContainer = document.querySelector('.main-container');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div')
    contactDiv.style.margin = '10% auto auto 20%';

    const contact1 = document.createElement('h2');
    contact1.classList.add('content-header');
    contact1.textContent = 'Nalaskur Thaelond';
    contactDiv.appendChild(contact1);

    const contact1Info = document.createElement('p');
    contact1Info.textContent = 'Owner, Whistle thrice to summon';
    contactDiv.appendChild(contact1Info);

    const contact2 = document.createElement('h2');
    contact2.classList.add('content-header');
    contact2.textContent = 'Arik Stillmarsh';
    contactDiv.appendChild(contact2);

    const contact2Info = document.createElement('p');
    contact2Info.textContent = 'General Manager, Hangs out in the corner usually';
    contactDiv.appendChild(contact2Info);

    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    mainContainer.appendChild(contactDiv);
}