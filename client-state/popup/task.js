const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

if (document.cookie !== 'popupWasClosed') {
    modal.classList.add('modal_active');
};

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'popupWasClosed';
});