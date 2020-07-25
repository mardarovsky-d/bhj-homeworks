const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');
const closeButtons = document.getElementsByClassName('modal__close_times');

let showPopup = function(popup) {
    popup.classList.add('modal_active');
};

showSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};

let closePopup = function(closeButton) {
    closeButton.classList.remove('modal_active');
};

showPopup(modalMain);

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        if (i === 0) {
            closePopup(modalMain);
        } else if (i === 1) {
            closePopup(modalSuccess);
        }  
    }
};

