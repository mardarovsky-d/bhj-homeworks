const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        let haveMenu = menuLink[i].nextElementSibling.classList;
        if (haveMenu.contains('menu_sub') && !haveMenu.contains('menu_active')) {
            haveMenu.add('menu_active');
            return false;
        } else {
            haveMenu.remove('menu_active');
            return false;
        }
    }
};