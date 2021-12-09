export function reviewsLoad() {

    const mainContainer = document.querySelector('.main-container');
    const reviewsDiv = document.createElement('div');
    reviewsDiv.classList.add('reviews-div')
    reviewsDiv.style.margin = '10% auto auto 20%';

    const reviewsHeader = document.createElement('h2');
    reviewsHeader.classList.add('content-header');
    reviewsHeader.textContent = 'Reviews';
    reviewsDiv.appendChild(reviewsHeader);

    const reviewsBody = document.createElement('div');
    reviewsBody.classList.add('reviews-body');

    const review1 = document.createElement('div');
    review1.classList.add('review');
    const quote1 = document.createElement('p');
    const quotee1 = document.createElement('p');
    quotee1.classList.add('quotee');
    quote1.textContent = '"Good food, welcoming atmosphere and our horses were\
    well looked after. Bit of an odd smell but you get used to it."'
    quotee1.textContent = '- Balmin Bellarbree, Traveller';
    review1.appendChild(quote1);
    review1.appendChild(quotee1);
    
    reviewsBody.appendChild(review1);

    const review2 = document.createElement('div');
    review2.classList.add('review');
    const quote2 = document.createElement('p');
    const quotee2 = document.createElement('p');
    quotee2.classList.add('quotee');
    quote2.textContent = '"Completely innaccessible. I could not fit through the door. \
    Patrons ran screaming as I approached. Brilliant outdoor decor however."'
    quotee2.textContent = '- Harshnag, Frost Giant';
    review2.appendChild(quote2);
    review2.appendChild(quotee2);
    
    reviewsBody.appendChild(review2);

    const review3 = document.createElement('div');
    review3.classList.add('review');
    const quote3 = document.createElement('p');
    const quotee3 = document.createElement('p');
    quotee3.classList.add('quotee');
    quote3.textContent = '"An honest legitimate establishment. Absolutely wholesome\
    environment. Bring your family!"';
    quotee3.textContent = '- Arik Stillmarsh, Vampire';
    review3.appendChild(quote3);
    review3.appendChild(quotee3);
    
    reviewsBody.appendChild(review3);

    const review4 = document.createElement('div');
    review4.classList.add('review');
    const quote4 = document.createElement('p');
    const quotee4 = document.createElement('p');
    quotee4.classList.add('quotee');
    quote4.textContent = '"Yeah I pay my taxes. Who says I don\'t?"'
    quotee4.textContent = '- Nalaskur Thaelond, Owner';
    review4.appendChild(quote4);
    review4.appendChild(quotee4);
    
    reviewsBody.appendChild(review4);

    reviewsDiv.appendChild(reviewsBody);

    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    mainContainer.appendChild(reviewsDiv);
}