const form = document.getElementById('Form');
const input = document.getElementById('Number');
const result = document.getElementById('Result');
const resultContainer = document.getElementById('ResultContainer');

const asterisks = (n) => {
  var aux = '';
  for (let i = 0; i < n; i++) {
      aux += "* ";
  }
  piramideItem.innerHTML = `${aux}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value || input.value <= 0) return;
  resultContainer.innerText = '';

  for (let i = 0; i <= parseInt(input.value, 10); i++) {
    piramideItem = document.createElement('LI');
    piramideItem.id = 'input-list-' + i;
    asterisks((i * 2) - 1);
    resultContainer.appendChild(piramideItem);
  }

  input.value = '';
});