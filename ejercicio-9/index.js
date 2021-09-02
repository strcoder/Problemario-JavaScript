const nSale = document.getElementById('FormNSale');
const formSales = document.getElementById('FormSales');
const inputNSale = document.getElementById('NumberSales');
const inputSale = document.getElementById('Sale');
const list = document.getElementById('List');
const listContainer = document.getElementById('ListContainer');
const resultContainer = document.getElementById('ResultContainer');
const reset = document.getElementById('Reset');
const addNSale = document.getElementById('AddNSale');
const addSale = document.getElementById('AddSale');

const array = [];
reset.style.display = 'none';
formSales.style.display = 'none';
listContainer.style.display = 'none';
resultContainer.style.display = 'none';

const showResult = () => {
  const result1 = document.getElementById('Result1');
  const result2 = document.getElementById('Result2');
  const result3 = document.getElementById('Result3');
  const resultTotal = document.getElementById('ResultTotal');

  const lessThan500 = array.filter((item) => item <= 500);
  const higherThan1000 = array.filter((item) => item > 1000);
  const higherThan500 = array.filter((item) => item > 500 && item <= 1000);

  const lessThan500Total = lessThan500.length > 0  ? lessThan500?.reduce((a, b) => a + b) : 0;
  const higherThan500Total = higherThan500.length > 0 ? higherThan500?.reduce((a, b) => a + b) : 0;
  const higherThan1000Total = higherThan1000.length > 0 ? higherThan1000?.reduce((a, b) => a + b) : 0;
  const Total = lessThan500Total + higherThan500Total +higherThan1000Total;

  result1.innerHTML = `
    <strong>Ventas mayores a $1000: </strong>
    <br />
    No de elementos: ${higherThan1000.length}
    <br />
    Monto total: $${higherThan1000Total}
    <br />
    Elementos: ${JSON.stringify(higherThan1000)}
  `;

  result2.innerHTML = `
    <strong>Ventas mayores a $500: </strong>
    <br />
    No de elementos: ${higherThan500.length}
    <br />
    Monto total: $${higherThan500Total}
    <br />
    Elementos: ${JSON.stringify(higherThan500)}
  `;

  result3.innerHTML = `
    <strong>Ventas menores o iguales a $500: </strong>
    <br />
    No de elementos: ${lessThan500.length}
    <br />
    Monto total: $${lessThan500Total}
    <br />
    Elementos: ${JSON.stringify(lessThan500)}
  `;

  resultTotal.innerHTML = `<strong>Monto total de las ventas: $${Total}</strong>`;
}

reset.addEventListener('click', () => {
  list.innerText = '';
  inputNSale.value = '';
  inputNSale.disabled = false;
  reset.style.display = 'none';
  addNSale.style.display = 'flex';
  formSales.style.display = 'none';
  listContainer.style.display = 'none';
  resultContainer.style.display = 'none';
  addSale.disabled = false;
  inputSale.disabled = false;
  addSale.classList.remove('disabled');
  inputNSale.focus();
  array.splice(0, array.length);
});

nSale.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!inputNSale.value) return;

  formSales.style.display = 'grid';
  inputNSale.disabled = true;
  inputSale.focus();
  reset.style.display = 'flex';
  addNSale.style.display = 'none';
});

formSales.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!inputSale.value) return;

  const p = document.createElement('p');
  array.push(parseInt(inputSale.value, 10));
  p.innerText = `Venta número ${array.length}: $${inputSale.value}`;
  list.appendChild(p);
  inputSale.value = '';
  listContainer.style.display = 'grid';
  if (array.length === parseInt(inputNSale.value, 10)) {
    addSale.disabled = true;
    inputSale.disabled = true;
    addSale.classList.add('disabled');
    resultContainer.style.display = 'grid';
    showResult();
  }
});
