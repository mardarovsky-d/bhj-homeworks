const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const file = document.getElementById('file');
    const formData = new FormData();
    formData.append('file', file);
    xhr.upload.onprogress = function (event) {
        const progress = document.getElementById('progress');
        progress.value = (event.loaded / event.total).toFixed(3);
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
        console.log('ProgressBar: ' + progress.value);
    };
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
});