const dropDown = document.querySelector('.dropdown');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItems = document.querySelectorAll('.dropdown__item');
let dropDownValue = document.querySelector('.dropdown__value');

dropDown.addEventListener('click', function() {
    dropDownList.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < dropDownItems.length; i++) {
    dropDownItems[i].onclick = function() {
        dropDownValue.textContent = dropDownItems[i].querySelector('a').textContent;
        return false;
    };
};