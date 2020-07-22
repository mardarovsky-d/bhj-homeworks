let timeDecrement = function () {
    let timerInt = document.getElementById('timer');
    timerInt.textContent == 0 ? alert('Вы победили в конкурсе!') : timerInt.textContent--;
}
setInterval(timeDecrement, 1000);