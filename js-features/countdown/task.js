let timeDecrement = function () {
    let timerInt = document.getElementById('timer');
    if (timerInt.textContent == 0) {
        clearInterval(timerID);
        alert('Вы победили в конкурсе!');
    } else {
        timerInt.textContent--;
    }
}
let timerID = setInterval(timeDecrement, 1000);