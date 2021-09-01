const form = document.getElementById('Form');
const input = document.getElementById('Number');
const list = document.getElementById('List');
const listContainer = document.getElementById('ListContainer');
const resultContainer = document.getElementById('ResultContainer');
const showButton = document.getElementById('ShowResult');

const array = [];
listContainer.style.display = 'none';
resultContainer.style.display = 'none';

const upwardSort = () => {
  return array.sort((a, b) => a - b);
}

const fallingSort = () => {
  return array.sort((a, b) => b - a);
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
  const upward = document.getElementById('ResultUpward');
  const falling = document.getElementById('ResultFalling');

  upward.innerText = `Odenamiento ascendente: ${JSON.stringify(upwardSort())}`;
  falling.innerText = `Ordenamiento descendente: ${JSON.stringify(fallingSort())}`;
});
