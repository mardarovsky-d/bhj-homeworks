const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const answers = ["И вам не хворать",
"Не пиши сюда больше",
"Мы вам ничего не должны",
"Научись писать грамотно, а потом возвращайся",
"Адиос, мучачо",
"Нас ни за что не штрафуют))",
"Отстань",
"Я ввобще сегодня работать не буду",
"Ща поем, тогда может отвечу",
"Чао, крошка))"];

chatWidget.addEventListener('click', function() {
    this.classList.add('chat-widget_active');
});

const userMessage = (event) => {
    let date = new Date();
    if (event.key === 'Enter' && input.value != '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${input.value}</div>
        </div>
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${answers[Math.floor(Math.random() * answers.length)]}</div>
        </div>
        `;
        input.value = "";
    }
}

input.addEventListener('keyup', userMessage);