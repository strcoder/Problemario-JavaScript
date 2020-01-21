title.innerHTML = 'Problema Final';
subtitle.innerHTML = 'Digita los datos del empleado';
instructions.innerHTML = 'Digite el nombre del empleado, salario diario, <br> y seleccione la fecha';
btnPrimary.innerHTML = 'Aceptar';

btnPrimary.style.display = 'grid';
inputNumbers.style.display = 'grid';
date.style.display = 'grid';

buttons.style.display = 'grid';

btnPrimary.style.display = 'grid';

inputNumbers.style.gridTemplateColumns = '1fr 1fr 1fr';

item[0].style.display = 'grid';
item[1].style.display = 'grid';
item[6].style.display = 'grid';
item[7].style.display = 'grid';
item[8].style.display = 'grid';

input[0].setAttribute('placeholder', 'Nombre del empleado');
input[1].setAttribute('placeholder', 'Salario diario');

input[0].setAttribute('onkeypress', '');

btnPrimary.setAttribute('onclick', 'ejercicioFinal()');

for (let i = 0; i < 5; i++) { select[i] = document.getElementById(`select-${i}`); }

function ejercicioFinal() {
    let nombre, salario, fecha;
    let empleado, ingeniero;
    let text = '';
    nombre = getNombre();
    salario = getSalarioDiario();
    fecha = getFecha();
    
    if (nombre === undefined || salario === undefined) {
        result.innerHTML = '¡¡ERROR!! 404'
        return;
    } else {
        empleado = new Empleado(nombre, fecha, parseFloat(salario));
        ingeniero = new Ingeniero(nombre, fecha , parseFloat(salario), 'departamento');
    }
    
    text += `<h2>Empleado: ${empleado.getEmpleado()}</h2> <br>`;
    text += `<h2>Salario quincenal: </h2>$${empleado.salario()}`;

    result.innerHTML = text;
}

function getNombre() {
    let inputValue = input[0].value;

    if (inputValue === '') {
        return;
    } else {
        return inputValue;
    }
}

function getSalarioDiario() {
    getNumberY();
    if (isNaN(y) || y < 0) {
        return;
    } else {
        return y;
    }
}

// Valores de las listas expandibles
function getFecha() {
    return new Fecha(parseInt(select[2].value), parseInt(select[3].value) + 1, parseInt(select[4].value));
}