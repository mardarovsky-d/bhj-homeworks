const items = document.querySelector('#items');
const loader = document.getElementById('loader');
const xhr = new XMLHttpRequest;

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        const currencies = Object.values(JSON.parse(xhr.responseText).response.Valute);
        currencies.forEach((currency) => {
            items.insertAdjacentHTML('beforeend', 
            `
            <div class="item">
            <div class="item__code">
                ${currency.CharCode}
            </div>
            <div class="item__value">
                ${currency.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>
            `
            )
        })
    } else {
        loader.classList.add('loader_active');
    }
}