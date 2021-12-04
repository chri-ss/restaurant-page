const pageLoad = () => {

    const contentContainer = document.getElementById('content');

    const makeSidebar = (() => {
    
    let sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    let navWrapper = document.createElement('div');
    navWrapper.classList.add('nav-wrapper');
    let nav = document.createElement('ul');

    let listItems = ['Menu', 'Reviews', 'About', 'Contact'];

    for(let i = 0; i < 4; ++i)
    {
        let listElement = document.createElement('li');
        let navLink = document.createElement('a');
        navLink.textContent = listItems[i];
        listElement.appendChild(navLink);
        nav.appendChild(listElement);
    }
    navWrapper.appendChild(nav);
    sideBar.appendChild(navWrapper);
    contentContainer.appendChild(sideBar);
})();

const makeMain = (() => {
    let main = document.createElement('div');
    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'The Bargewright Inn';
    main.classList.add('main-container');
    let blurbAndCat = document.createElement('div');
    blurbAndCat.classList.add('blurb-and-cat');
    let blurb = document.createElement('div');
    blurb.classList.add('blurb');
    blurb.textContent = 'This restaurant is really great. I can\'t believe I ate here! I have two cats.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    let cat = document.createElement('div');
    cat.classList.add('cat');
    blurbAndCat.appendChild(blurb);
    blurbAndCat.appendChild(cat);
    main.appendChild(header);
    main.appendChild(blurbAndCat);
    contentContainer.appendChild(main);
})();

return { makeSidebar, makeMain };
}

export default pageLoad();  