const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        const serverAnswer = JSON.parse(xhr.responseText);
        
        pollTitle.textContent = serverAnswer.data.title;
        
        const answers = serverAnswer.data.answers;

        answers.forEach((answer, i) => {
            pollAnswers.insertAdjacentHTML('afterbegin', `
            <button class="poll__answer" answer-id="${i}">${answer}</button>
            <br>
            `);
        });

        const answerButtons = pollAnswers.querySelectorAll('.poll__answer');
        answerButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                //e.preventDefault();
                alert('Спасибо, ваш голос засчитан');
            });
        });
    }
}