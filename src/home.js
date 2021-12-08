export function homeLoad() {

    const contentContainer = document.querySelector('.main-container');
    
    let main = document.createElement('div');
    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'The Bargewright Inn';
    main.classList.add('main-container');
    let blurb = document.createElement('div');
    blurb.classList.add('blurb');
    blurb.textContent = 'Situated atop historic Jundar\'s Hill, the Bargewright Inn is your one stop shop for good eats, cold ale, and expert livestock and pack animal boarding.'
    main.appendChild(header);
    main.appendChild(blurb);
    content.removeChild(contentContainer)
    content.appendChild(main);
    contentContainer.style.marginLeft = '20%';
}