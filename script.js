const inputAmount = document.getElementById('amount');
const currencySelect = document.getElementById('currencies');
const resultValue = document.getElementById('result');
const checkButton = document.getElementById('button');
const currencyTable = getCurrencies();

const select = document.getElementById('select');
let currencies;
let currencyPLN;

resultValue.innerHTML = ' XXX PLN';

function getCurrencies() {
  fetch('https://api.nbp.pl/api/exchangerates/tables/A/')
    .then((response) => response.json())
    .then((data) => {
      currencies = data[0].rates;
    });
}
document.addEventListener('DOMContentLoaded', getCurrencies);

function convertCurrency() {
  currencies.forEach((item) => {
    if (item.code === currencySelect.value) {
      const result = item.mid * inputAmount.value;
      const resultFixed = result.toFixed(2);
      resultValue.innerHTML = resultFixed + ' PLN';
    }
  });
}

const button = document
  .getElementById('button')
  .addEventListener('click', convertCurrency);
