const pageLoad = () => {
    let mainContainer = document.getElementById('content');
    let newDiv = document.createElement('div');
    newDiv.textContent = 'aaaa';
    mainContainer.appendChild(newDiv);
}

export default pageLoad();  