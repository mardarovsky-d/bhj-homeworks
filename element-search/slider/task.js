const nextButton = document.querySelector('.slider__arrow_next');
const prevButton = document.querySelector('.slider__arrow_prev');
const images = document.querySelectorAll('.slider__item');
let imageCount = 0;

console.log(images);

const moveSlidesForward = function() {
    images[imageCount].classList.remove('slider__item_active');
    if (imageCount < (images.length - 1)) {
        imageCount++;
    } else imageCount = 0;
    images[imageCount].classList.add('slider__item_active');
};

const moveSlidesBack = function() {
    images[imageCount].classList.remove('slider__item_active');
    imageCount--;
    if (imageCount < 0) {
        imageCount = (images.length - 1);
    }
    images[imageCount].classList.add('slider__item_active');
    };

nextButton.onclick = function() {
    moveSlidesForward();
};

prevButton.onclick = function () {
    moveSlidesBack();
};