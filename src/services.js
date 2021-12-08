import horseIcon from './horse.png';

export function servicesLoad() {
    const mainContainer = document.querySelector('.main-container');
    const servicesDiv = document.createElement('div');
    servicesDiv.classList.add('services-div');
    servicesDiv.style.margin = '10% auto auto 20%';

    const horseImage = new Image();
    horseImage.src = horseIcon;
    horseImage.classList.add('horse-image');
    servicesDiv.appendChild(horseImage);

    const auctionHeader = document.createElement('h2');
    auctionHeader.textContent = 'Livestock Auction';
    auctionHeader.classList.add('auction-header');
    servicesDiv.appendChild(auctionHeader);

    const auctionInfo = document.createElement('p');
    auctionInfo.textContent = 'Every Sunday from 9:00 am to 12:00 pm.';
    servicesDiv.appendChild(auctionInfo);

    const animalBoardingHeader = document.createElement('h2');
    animalBoardingHeader.textContent = 'Animal Boarding';
    animalBoardingHeader.classList.add('animal-boarding-header');
    servicesDiv.appendChild(animalBoardingHeader);

    const animalBoardingInfo = document.createElement('p');
    animalBoardingInfo.textContent = '1gp / night, large animal surcharge may apply.';
    servicesDiv.appendChild(animalBoardingInfo);

    const horseshoeingHeader = document.createElement('h2');
    horseshoeingHeader.textContent = 'Professional Horseshoeing';
    horseshoeingHeader.classList.add('horseshoeing-header');
    servicesDiv.appendChild(horseshoeingHeader);

    const horseshoeingInfo = document.createElement('p');
    horseshoeingInfo.textContent = '5sp / hoof';
    servicesDiv.appendChild(horseshoeingInfo);

    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    mainContainer.appendChild(servicesDiv);
}