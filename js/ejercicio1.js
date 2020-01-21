title.innerHTML = 'Conteo de numeros positivos y negativos';
subtitle.innerHTML = 'Digita los numeros';
instructions.innerHTML = 'Para escribir números negativos ' +
    '<br> pulsar la tecla ( - ) después de escribir algún el número.' +
    '<br> Para agregar pulsa el boton + o presiona enter'
btnPrimary.innerHTML = 'Calcular';

btnPrimary.style.display = 'grid';
btnAdd.style.display = 'grid';

item[3].style.display = 'grid';

item[3].style.gridTemplateColumns = '0 1fr 0.5fr'

btnPrimary.setAttribute('onclick', 'ejercicioUno()');
btnAdd.setAttribute('onclick', 'getNumberArray()');

var positivos = 0, negativos = 0, cero = 0;
var mayor = -Infinity, menor = Infinity;

function ejercicioUno() {
    let value = input[3].value;
    if (value !== '') {
        array[nElement] = value;
        nElement++;
    } else if (array.length === 0) {
        result.innerHTML = '¡¡ERROR!!';
        return;
    }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativos++;
        } else if (array[i] > 0) {
            positivos++;
        } else {
            cero++;
        }
        menor = array[i] < menor ? array[i] : menor;
        mayor = array[i] > mayor ? array[i] : mayor;
    }
    printResultEJ1();
}

function printResultEJ1() {
    let text = '';
    text += `<h2>Numeros digitados</h2> <p>Numeros = ${array}</p>`;
    text += `<h2>Cantidad de numeros Positivos</h2> <p>R = ${positivos}</p>`;
    text += `<h2>Cantidad de numeros Negativos</h2> <p>R = ${negativos}</p>`;
    text += `<h2>Cantidad de numeros Cero</h2> <p>R = ${cero}</p>`;
    text += `<h2>Numero mas grande digitado</h2> <p>R = ${mayor}</p>`;
    text += `<h2>Numero mas pequeño digitado</h2> <p>R = ${menor}</p>`;

    result.innerHTML = text;
    array = [];
    itemNumber = document.getElementById(`input-number-3`);
    itemNumber.value = '';
    positivos = 0;
    negativos = 0;
    cero = 0;
    nElement = 0;
    mayor = 0;
    menor = 0;
}
