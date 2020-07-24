let timeDecrement = function () {
    let timerInt = document.getElementById('timer');
    timerInt.textContent == 0 ? alert('Вы победили в конкурсе!') || clearInterval(timerID) : timerInt.textContent--;
}
let timerID = setInterval(timeDecrement, 1000);