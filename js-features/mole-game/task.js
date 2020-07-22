const killMole = document.getElementById('dead'),
    miss = document.getElementById('lost');

let killCount = 0,
    missCount = 0;

let win = function () {
    if (killCount === 5) {
        alert('Вы выиграли');
        killMole.textContent = 0;
        miss.textContent = 0;
        killCount = 0;
        missCount = 0;
    };

    if (missCount === 5) {
        alert('Вы проиграли');
        killMole.textContent = 0;
        miss.textContent = 0;
        killCount = 0;
        missCount = 0;
    };
}

let getHole = function () {
    for (let index = 1; index < 10; index++) {
        let holeIndex = document.getElementById(`hole${index}`);
        holeIndex.onclick = function () {
            if (holeIndex.className.includes('hole_has-mole')) {
                killMole.textContent++;
                killCount++;
                win();
            } else {
                miss.textContent++;
                missCount++;
                win();
            };
        };
    }
}

getHole();