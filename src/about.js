export function aboutLoad() {
    const mainContainer = document.querySelector('.main-container');
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-div')
    aboutDiv.style.margin = '10% auto auto 20%';

    aboutDiv.textContent = 'More than a simple Inn, The Bargewright is a thriving community\
    of merchants, blacksmiths, weelwrights, coopers and wagon-makers from across the north.\
    Our "walled structure" out back provides the perfect sanctuary for your precious assets \
    and our trade secrets. Trust in "The Zhentarim" to watch over your safety for the duration\
    of your stay and enjoy the rustic scents of our outdoor industrial complex.'

    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    mainContainer.appendChild(aboutDiv);
}