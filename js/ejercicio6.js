title.innerHTML = 'Ordenar datos';
subtitle.innerHTML = 'Digita los numeros';
instructions.innerHTML = 'Digite los n numeros a los que desee <br> ordenar de forma ascendente y descendente.' + 
    '<br> Para agregar numeros presiona enter';
btnPrimary.innerHTML = 'Ordenar';

btnPrimary.style.display = 'grid';
item[3].style.display = 'grid';

btnPrimary.setAttribute('onclick', 'ejercicioSeis()');

function ejercicioSeis() {
    let text = '';

    text += `<h2>Numeros digitados</h2><p>${array}</p>`
    text += `<h2>Orden Ascendente</h2><p>${ascendente()}</p>`
    text += `<h2>Orden Descendentes</h2><p>${descendente()}</p>`

    result.innerHTML = text;
}

function ordenar() {
    ascendente();
    descendente();
}

function ascendente() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

function descendente() {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}