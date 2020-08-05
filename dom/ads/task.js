'use strict';

const phrases = Array.from(document.querySelectorAll('.rotator__case')),
      activePhrase = document.querySelector('.rotator__case_active');
let i = 0;

activePhrase.addEventListener('click', () => {
    setInterval(() => {
        if (i < (phrases.length - 1)) {
            phrases[i].classList.remove('rotator__case_active');
            i++;
            phrases[i].classList.add('rotator__case_active');
        } else {
            phrases[i].classList.remove('rotator__case_active');
            i = 0;
            phrases[i].classList.add('rotator__case_active');
        }
    }, 1000);
});