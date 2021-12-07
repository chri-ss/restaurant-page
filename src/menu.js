export function menuLoad() {
    const mainContainer= document.querySelector('.main-container');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    
    const breakfast = document.createElement('div');
    breakfast.classList.add('breakfast');

    const breakfastHeader = document.createElement('h2');
    breakfastHeader.classList.add('breakfast-header');
    breakfastHeader.textContent = 'Breakfast';
    breakfast.appendChild(breakfastHeader);

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
    lunchHeader.classList.add('lunch-header');
    lunchHeader.textContent = 'Lunch';
    lunch.appendChild(lunchHeader); 

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
    dinnerHeader.classList.add('dinner-header');
    dinnerHeader.textContent = 'Dinner';
    dinner.appendChild(dinnerHeader); 

    let dinnerItems = ['Grilled wild boar chops - 10sp', 'Stuffed trout - 8sp', 'Whole Duck - 12sp'];

    for(let i = 0; i < dinnerItems.length; ++i)
    {
        let item = document.createElement('p');
        item.textContent = dinnerItems[i];
        dinner.appendChild(item);
    }
    
    menuDiv.appendChild(breakfast);
    menuDiv.appendChild(lunch);
    menuDiv.appendChild(dinner);
    mainContainer.appendChild(menuDiv)
}