import drinkIcon from './drinks.png';
import breakfastIcon from './breakfast.png';
import lunchIcon from './lunch.png';
import dinnerIcon from './dinner.png';

export function menuLoad() {
    const mainContainer = document.querySelector('.main-container');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    menuDiv.style.margin = '10% auto auto 20%';

    const drinks = document.createElement('div');
    drinks.classList.add('drinks');

    const drinksHeader = document.createElement('h2');
    const drinkImage = new Image();
    drinkImage.src = drinkIcon;
    drinkImage.classList.add('drink-image');
    drinksHeader.classList.add('content-header');
    drinksHeader.textContent = 'Drinks';
    drinks.appendChild(drinksHeader);
    drinks.appendChild(drinkImage);

    let drinkItems = ['Baldur\'s Gate Pale Ale - 15cp', 'Blood Wine - 2sp', 'Evermead - 12cp', 'Clean mug - ask server'];
    
    for(let i = 0; i < drinkItems.length; ++i)
    {
        let item = document.createElement('p');
        item.textContent = drinkItems[i];
        drinks.appendChild(item);
    }
    
    const breakfast = document.createElement('div');
    breakfast.classList.add('breakfast');

    const breakfastHeader = document.createElement('h2');
    const breakfastImage = new Image();
    breakfastImage.src = breakfastIcon;
    breakfastImage.classList.add('breakfast-image');
    breakfastHeader.classList.add('content-header');
    breakfastHeader.textContent = 'Breakfast';
    breakfast.appendChild(breakfastHeader);
    breakfast.appendChild(breakfastImage);

    let breakfastItems = ['Fried Perch - 3sp', 'Hippogriff egg - 3sp', 'Flatbread - 4sp']
    
    for(let i = 0; i < breakfastItems.length; ++i)
    {
        let item = document.createElement('p');
        item.textContent = breakfastItems[i];
        breakfast.appendChild(item);
    }

    const lunch = document.createElement('div');
    lunch.classList.add('lunch');

    const lunchHeader = document.createElement('h2');
    const lunchImage = new Image();
    lunchImage.src = lunchIcon;
    lunchImage.classList.add('lunch-image');
    lunchHeader.classList.add('content-header');
    lunchHeader.textContent = 'Lunch';
    lunch.appendChild(lunchHeader); 
    lunch.appendChild(lunchImage);

    let lunchItems = ['Leg of mutton - 5sp', 'Turnips! - 4sp', 'Chicken half  - 5sp'];

    for(let i = 0; i < lunchItems.length; ++i)
    {
        let item = document.createElement('p');
        item.textContent = lunchItems[i];
        lunch.appendChild(item);
    }

    const dinner = document.createElement('div');
    dinner.classList.add('dinner');

    const dinnerHeader = document.createElement('h2');
    const dinnerImage = new Image();
    dinnerImage.src = dinnerIcon;
    dinnerImage.classList.add('dinner-image');
    dinnerHeader.classList.add('content-header');
    dinnerHeader.textContent = 'Dinner';
    dinner.appendChild(dinnerHeader);
    dinner.appendChild(dinnerImage); 

    let dinnerItems = ['Grilled wild boar chops - 1gp', 'Stuffed trout - 8sp', 'Whole Duck - 12sp'];

    for(let i = 0; i < dinnerItems.length; ++i)
    {
        let item = document.createElement('p');
        item.textContent = dinnerItems[i];
        dinner.appendChild(item);
    }
    
    menuDiv.appendChild(drinks);
    menuDiv.appendChild(breakfast);
    menuDiv.appendChild(lunch);
    menuDiv.appendChild(dinner);

    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    mainContainer.appendChild(menuDiv)
}