export function menuLoad() {
    let mainContainer= document.querySelector('.main-container');
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    
    let beer = document.createElement('div');
    let beerHeader = document.createElement('h2');
    let beerInfo = document. createElement('p');
    beerHeader.textContent = 'A beer';
    beerInfo.textContent = 'a beer';

    beer.appendChild(beerHeader);
    beer.appendChild(beerInfo);
    menuDiv.appendChild(beer)
    mainContainer.appendChild(menuDiv)
}