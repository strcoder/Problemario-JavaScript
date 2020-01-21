title.innerHTML = 'Media y desviacion estandar';
subtitle.innerHTML = 'Digita los numeros';
instructions.innerHTML = 'Digite los n numeros a los que desee <br> calcular la media y la desviacion estandar.' + 
    '<br> Para agregar numeros presiona enter';
btnPrimary.innerHTML = 'Calcular';

btnPrimary.style.display = 'grid';
btnPrimary.setAttribute('onclick', 'ejercicioCinco()');

item[3].style.display = 'grid';


function ejercicioCinco() {
    let text = '';

    text += `<h2>Numeros</h2><p>${array}</p>`;
    text += `<h2>Media</h2><p>${media()}</p>`;
    text += `<h2>Desviacion Estandar</h2><p>${desviacionEstandar()}</p>`;

    result.innerHTML = text;

    array = [];
    itemNumber = document.getElementById(`input-number-0`);
    input[3].value = '';
    nElement = 0;
}

function suma() {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

function media() {
    return suma() / nElement;

}

function desviacionEstandar() {
    var n = 0;
    var suma = 0, result = 0, m = media();

    for (let i = 0; i < array.length; i++) {
        suma += Math.pow((array[i] - m), 2);
    }

    result = suma / nElement;
    
    return Math.sqrt(result);
}