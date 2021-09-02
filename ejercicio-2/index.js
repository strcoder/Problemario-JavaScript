const form = document.getElementById('Form');
const inputX = document.getElementById('NumberX');
const inputK = document.getElementById('NumberK');
const valueX = document.getElementById('ValueX');
const valueK = document.getElementById('ValueK');
const result = document.getElementById('Result');
const resultContainer = document.getElementById('ResultContainer');

resultContainer.style.display = 'none';

const potencia = (x, n) => {
  if (n == 0) {
    return 1;
  }
  return Math.pow(x, n) + potencia(x, n - 1);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!inputX.value || !inputK.value || inputK.value < 0) {
    return;
  }

  resultContainer.style.display = 'grid';
  valueX.innerHTML = `${inputX.value}<sup>${inputK.value}</sup>`;
  result.innerText = potencia(inputX.value, inputK.value);
  inputX.value = '';
  inputK.value = '';
});