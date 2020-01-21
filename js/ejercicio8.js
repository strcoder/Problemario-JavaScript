title.innerHTML = 'Compañia telefonica';
subtitle.innerHTML = 'Digita los elementos de la llamada';
instructions.innerHTML = 'Digite los minutos, segundos, <br> seleccione el dia y el turno.';
btnPrimary.innerHTML = 'Calcular';

btnPrimary.style.display = 'grid';
inputNumbers.style.display = 'grid';

inputNumbers.style.gridTemplateColumns = '1fr 1fr 0.4fr 0.4fr';

item[0].style.display = 'grid';
item[1].style.display = 'grid';

input[0].setAttribute('placeholder', 'Minutos');
input[1].setAttribute('placeholder', 'Segundos');

input[0].setAttribute('onkeypress', 'return numeroEntero(event, this)');
input[1].setAttribute('onkeypress', 'return numeroEntero(event, this)');

item[4].style.display = 'grid';
item[5].style.display = 'grid';

for (let i = 0; i < 5; i++) { select[i] = document.getElementById(`select-${i}`); }

btnPrimary.setAttribute('onclick', 'ejercicioOcho()');

var pago = 0;
var impuesto = 0;
var total = 0;

function ejercicioOcho() {
    let text = '';

    getNumberX();
    getNumberY();

    if (isNaN(x) || isNaN(y)) {
        result.innerHTML = '¡¡ERROR!!'
    } else {
        calcularLlamada();

        text += `<h2>Pago</h2><p>${pago}</p>`;
        text += `<h2>Impuestos</h2><p>${impuesto}</p>`;
        text += `<h2>Total a pagar</h2><p>${total}</p>`;

        result.innerHTML = text;

        input[0].value = '';
        input[1].value = '';
    }
}

function calcularLlamada() {
    calcularPago(tiempoDeLlamada());
    calcularImpuesto();
    calcularTotal();
}

function tiempoDeLlamada() {
    let min = x, seg = y;

    while (seg >= 60) {
        min++;
        seg -= 60;
    }

    return min + (seg / 100);
}

function calcularPago(min) {
    if (min < 5) {
        pago = min * 1;
    } else if (min < 8) {
        pago = (min - 5) * 0.5 + 5;
    } else if (min <= 10) {
        pago = (min - 8) * 0.7 + 7.4;
    } else {
        pago = (min - 10) * 0.5 + 8.8;
    }
}

function calcularImpuesto() {
    if (select[0].value === 7) {
        impuesto = pago * 0.5;
    } else {
        calcularTurno();
    }
}

function calcularTurno() {
    if (select[1].value === 1) {
        impuesto = pago * 0.15;
    } else {
        impuesto = pago * 0.10;
    }
}

function calcularTotal() {
    total = pago + impuesto; 
}