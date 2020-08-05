const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
    reveal.forEach((element) => {
        let elemPosition = element.getBoundingClientRect().top
        if (elemPosition < (window.innerHeight - 100) && (elemPosition > -100)) {
            element.classList.add('reveal_active');
        } else if ((elemPosition < -100) || elemPosition >= (window.innerHeight - 100)) {
            element.classList.remove('reveal_active');
        }
    })
})