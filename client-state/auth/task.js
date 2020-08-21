const signingFormContainer = document.getElementById('signin');
const signingForm = document.getElementById('signin__form');

let userLoggedIn = false;

if (userLoggedIn === false) {
    signingFormContainer.classList.add('signin_active');
}

signingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signingForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);
        if (response.success === true) {
            signingFormContainer.classList.remove('signin_active');
            const welcomeScreen = document.getElementById('welcome');
            const userId = document.getElementById('user_id');
            welcomeScreen.classList.add('welcome_active');
            userId.innerText = response.user_id;
        }
    }
});