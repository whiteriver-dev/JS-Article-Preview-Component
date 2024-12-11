const shareButton = document.querySelector('.share-button');
const userContainer = document.querySelector('.user');
const shareContainer = document.querySelector('.share-container');
const footer = document.querySelector('.footer');

shareButton.addEventListener('click', () => {
    if(userContainer.style.display !== 'none') {
        userContainer.style.display = 'none';
        shareContainer.style.display = 'flex';
        footer.classList.add('dark-grey-background');
        shareButton.classList.add('active');
    }
    else {
        shareContainer.style.display = 'none';
        footer.classList.remove('dark-grey-background');
        shareButton.classList.remove('active');
        userContainer.style.display = 'flex';
    }
})