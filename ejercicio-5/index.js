const form = document.getElementById('Form');
const input = document.getElementById('Number');
const list = document.getElementById('List');
const listContainer = document.getElementById('ListContainer');
const resultContainer = document.getElementById('ResultContainer');
const showButton = document.getElementById('ShowResult');

const array = [];
listContainer.style.display = 'none';
resultContainer.style.display = 'none';

const getMedia = () => {
  return array.reduce((a, b) => a + b) / array.length;
}

const standardDeviation = () => {
  const media = getMedia();
  const suma = array.map((a) => Math.pow((a - media), 2)).reduce((a, b) => a + b);
  const result = suma / array.length;
  return Math.sqrt(result);
}

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
  resultContainer.style.display = 'grid';
  const media = document.getElementById('ResultMedia');
  const deviation = document.getElementById('ResultDeviation');

  media.innerText = `Media: ${getMedia()}`;
  deviation.innerText = `Desviación estándar: ${standardDeviation()}`;
});
