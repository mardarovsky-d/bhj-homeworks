let clickCookie = document.getElementById('cookie');

clickCookie.onclick = function () {
    let clickCount = document.getElementById('clicker__counter');
    clickCount.textContent++;
    if (clickCookie.width == 200) {
        clickCookie.width = 150;
    } else {
        clickCookie.width = 200;
    }
}