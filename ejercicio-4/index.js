const form = document.getElementById('Form');
const input = document.getElementById('Number');
const result = document.getElementById('Result');
const resultContainer = document.getElementById('ResultContainer');
const matriz1 = document.getElementById('Matriz1');
const matriz2 = document.getElementById('Matriz2');
const sumButton = document.getElementById('MatSum');
const mulButton = document.getElementById('MatMul');

for (let i = 0; i < 9; i++) {
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.id = `Number-1-${i}`;
  input.value = 0;
  input.type = 'number';
  input.className = 'field-input';
  input.placeholder = 'Digita un numero';
  label.appendChild(input);
  matriz1.appendChild(label);
}

for (let i = 0; i < 9; i++) {
  const label = document.createElement('label');
  const input = document.createElement('input');
  input.id = `Number-2-${i}`;
  input.value = 0;
  input.type = 'number';
  input.className = 'field-input';
  input.placeholder = 'Digita un numero';
  label.appendChild(input);
  matriz2.appendChild(label);
}

const getMatriz = (number) => {
  const matriz = [[0,0,0], [0,0,0], [0,0,0]];
  let aux = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const input = document.getElementById(`Number-${number}-${aux}`);
      matriz[i][j] = parseInt(input.value) || 0;
      aux += 1;
    }
  }
  return matriz;
};

sumButton.addEventListener('click', () => {
  const mat1 = getMatriz(1);
  const mat2 = getMatriz(2);
  const pstrong = document.createElement('p');
  resultContainer.innerText = '';
  pstrong.innerHTML = '<strong>Resultado suma</strong>'
  resultContainer.appendChild(pstrong);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const div = document.createElement('div');
      div.className = 'Main__result--item';
      const p = document.createElement('p');
      p.innerText = mat1[i][j] + mat2[i][j];
      div.appendChild(p);
      resultContainer.appendChild(div);
    }
  }
});

mulButton.addEventListener('click', () => {
  const mat1 = getMatriz(1);
  const mat2 = getMatriz(2);
  const pstrong = document.createElement('p');
  let multi = [];
  resultContainer.innerText = '';
  pstrong.innerHTML = '<strong>Resultado multiplicación</strong>'
  resultContainer.appendChild(pstrong);
  for (let i = 0; i < 3; i++) {
    multi[i] = [];
    for (let j = 0; j < 3; j++) {
      multi[i][j] = 0;
      for (let k = 0; k < 3; k++) {
        multi[i][j] += mat1[i][k] *  mat2[k][j];
      }
      const div = document.createElement('div');
      div.className = 'Main__result--item';
      const p = document.createElement('p');
      p.innerText = multi[i][j];
      div.appendChild(p);
      resultContainer.appendChild(div);
    }
  }
});
