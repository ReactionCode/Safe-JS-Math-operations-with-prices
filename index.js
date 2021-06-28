import './assets/css/style.css';
const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(0.1 + 0.2);

const price = 9.33;
const quantity = 3;
console.log(price * quantity);

const anotherPrice = 70.18 * 100;
console.log((anotherPrice * quantity) / 100);

// Math trunc is not safe
const truncPrice = Math.trunc(17.4 * 100);
console.log('expected 174, result: ', truncPrice);

// Use Math round because operations are never higher than 0.5 expected result
const safePrice = Math.round(70.18 * 100);
console.log((safePrice * quantity) / 100);
