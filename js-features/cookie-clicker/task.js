const clickCookie = document.getElementById('cookie');
let clickSpeed = document.getElementById('click__speed'),
    timeArray = [0, 0];

clickCookie.onclick = function () {
    let clickCount = document.getElementById('clicker__counter');
    clickCount.textContent++;
    if (clickCookie.width == 200) {
        clickCookie.width = 150;
    } else {
        clickCookie.width = 200;
    };
    let clickTime = new Date();
    timeArray.push(clickTime.getTime());
    timeArray.shift(0);
    clickSpeed.textContent = 1/((timeArray[1] - timeArray[0])/1000);
}