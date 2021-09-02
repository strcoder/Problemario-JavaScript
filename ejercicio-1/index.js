const form = document.getElementById('Form');
const input = document.getElementById('Number');
const list = document.getElementById('List');
const listContainer = document.getElementById('ListContainer');
const resultContainer = document.getElementById('ResultContainer');
const showButton = document.getElementById('ShowResult');

const array = [];
listContainer.style.display = 'none';
resultContainer.style.display = 'none';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value) return;

  const p = document.createElement('p');
  if (array.length === 0) {
    p.innerText = input.value;
  } else {
    p.innerText = `, ${input.value}`;
  }
  array.push(parseInt(input.value, 10));
  list.appendChild(p);
  input.value = '';
  listContainer.style.display = 'grid';
});

showButton.addEventListener('click', () => {
  const zeroP = document.getElementById('ResultZero');
  const positiveP = document.getElementById('ResultPositive');
  const negativeP = document.getElementById('ResultNegative');
  const higherP = document.getElementById('ResultHigher');
  const lessP = document.getElementById('ResultLess');

  const zero = array.filter((item) => item === 0).length;
  const positive = array.filter((item) => item > 0);
  const negative = array.filter((item) => item < 0);
  const higher = Math.max(...array);
  const less =  Math.min(...array);

  resultContainer.style.display = 'grid';
  zeroP.innerText = `Numeros cero: ${zero}`;
  positiveP.innerText = `Numeros positivos: ${positive.length} ${JSON.stringify(positive)}`;
  negativeP.innerText = `Numeros negativos: ${negative.length} ${JSON.stringify(negative)}`;
  higherP.innerText = `Numero más grande: ${higher}`;
  lessP.innerText = `Numero más pequeño: ${less}`;
});
