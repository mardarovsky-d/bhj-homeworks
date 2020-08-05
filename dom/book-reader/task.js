const fontSizeIcon = Array.from(document.querySelectorAll('.font-size')),
    text = document.querySelector('.book');

fontSizeIcon.forEach((icon) => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();
        for (let i = 0; i < fontSizeIcon.length; i++) {
            fontSizeIcon[i].classList.remove('font-size_active');
        };
        icon.classList.add('font-size_active');
        if (icon.classList.contains('font-size_small')) {
            text.classList.remove('book_fs-big');
            text.classList.add('book_fs-small');
        } else if (icon.classList.contains('font-size_big')) {
            text.classList.remove('book_fs-small');
            text.classList.add('book_fs-big');
        } else {
            text.classList.remove('book_fs-small', 'book_fs-big');
        }
    })
});