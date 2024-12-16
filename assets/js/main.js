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
            if(shareContainer.style.display == 'none') {
                shareContainer.style.display = 'flex';
                shareButton.classList.add('active');
            }
            else {
                shareContainer.style.display = 'none';
                shareButton.classList.remove('active');
            }
    }
})

// This logic allows user to resize - while the share-container state stays the same among different screen sizes
function checkScreenSize() {
    if (window.innerWidth > 768) {
        userContainer.style.display = 'flex';
        footer.classList.remove('dark-grey-background');
    }

    if (window.innerWidth < 768 && shareContainer.style.display == 'flex' && userContainer.style.display == 'flex') {
        userContainer.style.display = 'none'; 
        footer.classList.add('dark-grey-background');
    }

    if (window.innerWidth < 768 && shareContainer.style.display == 'none' && userContainer.style.display == 'none') {
        userContainer.style.display = 'flex';
        shareContainer.style.display = 'none';
        shareButton.classList.remove('active')
    }

}

window.addEventListener('resize', checkScreenSize)





