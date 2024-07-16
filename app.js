const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); // parent container of buttons
const sectBtn = document.querySelectorAll('.control'); // individual buttons
const allSections = document.querySelectorAll('.main-content'); // body


function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    }

    // Sections active class
    allSections.forEach((section) =>
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (id) {
                // remove selected from other buttons
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                // hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    )
}

pageTransitions();
