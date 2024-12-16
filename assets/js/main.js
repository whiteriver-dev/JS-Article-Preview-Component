const shareButton = document.querySelector('.share-button');
const userContainer = document.querySelector('.user');
const shareContainer = document.querySelector('.share-container');
const footer = document.querySelector('.footer');



// This logic checks screen size then runs mobile/desktop logic based on screen size
shareButton.addEventListener('click', () => { 
    if (window.innerWidth < 768) {
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
    }
    else {

            if(shareContainer.style.display !== 'none') {
                shareContainer.style.display = 'none';
                shareButton.classList.remove('active');
            }
            else {
                shareContainer.style.display = 'flex';
                shareButton.classList.add('active');
            }
    }
})


// This logic hides the Desktop style share container if screen is resized to Mobile dimensions
function checkScreenSize() {
    if (window.innerWidth < 768 && shareContainer.style.display !== 'none') {
        shareContainer.style.display = 'none';
        shareButton.classList.remove('active');
    }

    else if (window.innerWidth > 768 && shareContainer.style.display !== 'none')
        shareContainer.style.display = 'none';
        shareButton.classList.remove('active');
        userContainer.style.display = 'flex';
        footer.classList.remove('dark-grey-background');
}

window.addEventListener('resize', checkScreenSize)






