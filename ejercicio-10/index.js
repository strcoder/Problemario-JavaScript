const form = document.getElementById('Form');
const inputX = document.getElementById('NumberX');
const inputN = document.getElementById('NumberN');
const valueX = document.getElementById('ValueX');
const valueK = document.getElementById('ValueK');
const result = document.getElementById('Result');
const resultContainer = document.getElementById('ResultContainer');

resultContainer.style.display = 'none';

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputX.value && parseInt(inputN.value, 10) === 0) {
    valueX.innerHTML = `${inputX.value}`;
    resultContainer.style.display = 'grid';
    result.innerHTML = '<p>1</p>';
    inputX.value = '';
    inputN.value = '';
    return;
  }
  if (!inputX.value || !inputN.value || inputN.value < 0) {
    resultContainer.style.display = 'none';
    return;
  }

  const x = parseInt(inputX.value);
  const n = parseInt(inputN.value);

  resultContainer.style.display = 'grid';
  valueX.innerHTML = `${inputX.value}`;
  let text = `<p>1</p> + <p>${x}</p>`;
  for (let i = 2; i <= n; i++) {
    text += `+  <div><p>${Math.pow(x, i)}</p><hr /><p>${factorial(i)}</p></div>`;
  }
  result.innerHTML = text;
  inputX.value = '';
  inputN.value = '';
});