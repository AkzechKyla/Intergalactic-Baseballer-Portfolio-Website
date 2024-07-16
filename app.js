const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); // parent container of buttons
const sectBtn = document.querySelectorAll('.control'); // individual buttons
const allSections = document.querySelectorAll('.main-content'); // body


function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

pageTransitions();
