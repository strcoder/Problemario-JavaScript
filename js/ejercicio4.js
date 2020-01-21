title.innerHTML = 'Suma y producto de matrices';
subtitle.innerHTML = 'Digite los elementos de las matrices';
instructions.innerHTML = '';
btnPrimary.innerHTML = 'Suma';
btnSecondary.innerHTML = 'Producto';

item[0].style.display = 'none';

matrices.style.display = 'grid';

btnPrimary.style.display = 'grid';
btnSecondary.style.display = 'grid';

btnPrimary.setAttribute('onclick', 'ejercicioCuatroSuma()');
btnSecondary.setAttribute('onclick', 'ejercicioCuatroProducto()');

buttons.style.display = 'grid';
buttons.style.gridTemplateColumns = '1fr 1fr'

function ejercicioCuatro(funcion) {
    let matrizNumeroUno = generateMatriz(0);
    let matrizNumeroDos = generateMatriz(1);
    
    if (matrizNumeroUno.length <= 0 || matrizNumeroDos.length <= 0) {
        result.innerHTML = '¡¡ERROR!!'
    } else {
        if (funcion === 'Suma') {
            sumaMatrices(matrizNumeroUno, matrizNumeroDos)
        } else if (funcion === 'Producto') {
            productoMatrices(matrizNumeroUno, matrizNumeroDos);
        }
        result.innerHTML = `<h2>Resultado ${funcion}</h2>`
        matrizResult.style.display = 'grid';
    }
}

function ejercicioCuatroSuma() {
    ejercicioCuatro('Suma');
}

function ejercicioCuatroProducto() {
    ejercicioCuatro('Producto');
}

function sumaMatrices(mat1, mat2) {
    let itemMatriz;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            itemMatriz = document.getElementById(`matriz-result-number-${i}-${j}`);
            itemMatriz.value = mat1[i][j] + mat2[i][j];
        }
    }
}

function productoMatrices(mat1, mat2) {
    let itemMatriz;
    let multi = [];
    for (let i = 0; i < 3; i++) {
        multi[i] = [];
        for (let j = 0; j < 3; j++) {
            multi[i][j] = 0;
            for (let k = 0; k < 3; k++) {
                multi[i][j] += mat1[i][k] *  mat2[k][j];
            }
            itemMatriz = document.getElementById(`matriz-result-number-${i}-${j}`);
            itemMatriz.value = multi[i][j];
        }
    }
}

function generateMatriz(index) {
    let inputMatriz; 
    let inputNumber;
    let matrizInput = [];
    let bool = true;
    for (let i = 0; i < 3; i++) {
        matrizInput[i] = [];
        for (let j = 0; j < 3; j++) {
            inputMatriz = document.getElementById(`matriz${index}-number-${i}-${j}`);
            inputNumber = isNaN(parseFloat(inputMatriz.value)) ? NaN : parseFloat(inputMatriz.value);
            
            if (isNaN(inputNumber)) {
                console.log('Error');
                inputMatriz.setAttribute('placeholder', '!!ERROR¡¡');
                bool = false;
            } else {
                matrizInput[i][j] = inputNumber;
            }
        }
    }

    return bool ? matrizInput : matrizInput = [];
}