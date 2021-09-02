const form = document.getElementById('Form');
const inputX = document.getElementById('NumberX');
const inputY = document.getElementById('NumberY');
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
  if (!inputX.value || !inputY.value || inputY.value < 0) {
    resultContainer.style.display = 'none';
    return;
  }

  const punto = new Punto(parseInt(inputX.value, 10), parseInt(inputY.value, 10));

  resultContainer.style.display = 'grid';
  result.innerHTML = `
    <p>Coordenadas cartesians: ${punto.toStringCartesianas()}</p>
    <p>Coordenadas polares: ${punto.toStringPolares()}</p>
  `;
  inputX.value = '';
  inputY.value = '';
});