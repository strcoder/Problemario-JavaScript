const form = document.getElementById('Form');
const input = document.getElementById('Number');
const result = document.getElementById('Result');
const resultContainer = document.getElementById('ResultContainer');

const triangulo = (n) => {
  const A = new Array(n);
  for (let i = 1; i <= n; i++) {
    A[i] = new Array(n);
    for (let j = 1; j <= i; j++) {
      A[i][j] = combina(i - 1, j - 1);
    }
  }

  for (let i = 1; i <= n; i++) {
    let texto = '';
    const piramideItem = document.createElement('LI');
    piramideItem.id = 'input-list-' + i;
    for (let j = 1; j <= i; j++) {
      texto += A[i][j];
      texto += ' ';
    }
    piramideItem.innerText = texto;
    resultContainer.appendChild(piramideItem);
  }
}

const combina = (p, q) =>  {
  return Math.round(factorial(p) / (factorial(q) * factorial(p - q)));
}

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value || input.value <= 0) return;
  resultContainer.innerText = '';

  triangulo(parseInt(input.value, 10));
  input.value = '';
});
