const form = document.getElementById('Form');
const inputX = document.getElementById('NumberX');
const inputY = document.getElementById('NumberY');
const list = document.getElementById('List');
const resultContainer = document.getElementById('ResultContainer');
const result = document.getElementById('Result');
const addition = document.getElementById('Addition');
const subtraction = document.getElementById('Subtraction');

const array = [];
resultContainer.style.display = 'none';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!inputX.value || !inputY.value) {
    resultContainer.style.display = 'none';
    return;
  }

  list.innerText = '';
  const complejo = new Complejo(parseInt(inputX.value, 10), parseInt(inputY.value, 10));
  array.push(complejo);

  resultContainer.style.display = 'grid';
  array.map((item, index) => {
    const p = document.createElement('p');
    p.innerHTML = `<p><strong>z${index + 1}</strong> = ${item.toString()}</p>`;
    list.appendChild(p);
    return item;
  });
  inputX.value = '';
  inputY.value = '';
});

addition.addEventListener('click', () => {
  if (array.length <= 1) {
    result.innerHTML = `No hay valores suficientes`;
    return;
  }

  const aux = array.reduce((a, b) => a.addition(b));
  result.innerHTML = `Suma: ${aux.toString()}`;
});

subtraction.addEventListener('click', () => {
  if (array.length <= 1) {
    result.innerHTML = `No hay valores suficientes`;
    return;
  }

  const aux = array.reduce((a, b) => a.subtraction(b));
  result.innerHTML = `Resta: ${aux.toString()}`;
});