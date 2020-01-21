title.innerHTML = 'Tiki Taka';
subtitle.innerHTML = 'Digita el numero de ventas';
instructions.innerHTML = 'Digite el numero de ventas realizadas y luego en aceptar <br> ' + 
    '<br> Para agregar montos presione la tecla enter';
btnPrimary.innerHTML = 'Aceptar';

inputNumbers.style.display = 'grid';

item[2].style.display = 'grid';

input[2].setAttribute('placeholder', 'Numero de ventas');
input[3].setAttribute('placeholder', 'Monto');

btnPrimary.style.display = 'grid';

btnPrimary.setAttribute('onclick', 'ejercicioNueve()');

var ventasMayores = 0;
var ventasMenores = 0;
var ventasIguales = 0;
var totalVentaMayor = 0;
var totalVentaMenor = 0;
var totalVentaIgual = 0;
var totalDeVentas = 0;

function ejercicioNueve() {
    getNumberN();
    if (isNaN(n) || n <= 0) {
        result.innerHTML = '¡¡ERROR!!'
    } else {
        result.innerHTML = '';
        input[2].disabled = true;
        btnPrimary.innerHTML = 'Calcular';
        btnPrimary.setAttribute('onclick', 'ejercicioNueve2()');
        item[3].style.display = 'grid';
        btnPrimary.disabled = true;
    }
}

function ejercicioNueve2() {
    let text = '';

    contadorDeVentas();

    text += `<h2>Numero de ventas</h2><p>${n}</p>`;
    text += `<h2>Monto de las ventas</h2><p>Montos = ${array}</p>`;
    text += `<h2>Ventas mayores de 1000</h2><p>R = ${ventasMayores}</p>`;
    text += `<h2>Ventas mayores de 500</h2><p>R = ${ventasIguales}</p>`;
    text += `<h2>Ventas menores de 500</h2><p>R = ${ventasMenores}</p>`;
    text += `<h2>Total de dinero en ventas mayores de 1000</h2><p>$${totalVentaMayor}</p>`;
    text += `<h2>Total de dinero en ventas mayores de 500</h2><p>$${totalVentaIgual}</p>`;
    text += `<h2>Total de dinero en ventas menores o iguales a 500</h2><p>$${totalVentaMenor}</p>`;
    text += `<h2>Total de dinero en todos las ventas</h2><p>$${totalDeVentas}</p>`;

    result.innerHTML = text;

    array = [];
    n = 0;
    ventasMayores = 0; ventasMenores = 0; ventasIguales = 0;
    totalVentaMayor = 0; totalVentaMenor = 0; totalVentaIgual = 0; totalDeVentas = 0;
    input[2].disabled = false;
    input[3].disabled = false;
    input[2].value = '';
    input[3].value = '';
    item[3].style.display = 'none';
    btnPrimary.innerHTML = 'Aceptar';
    btnPrimary.setAttribute('onclick', 'ejercicioNueve()');
}

function contadorDeVentas() {
    for (let i = 0; i < array.length; i++) {
        comparar(array[i]);
        totalDeVentas += array[i];
    }
}

function comparar(monto) {
    if (monto > 1000) {
        ventasMayores++;
        totalVentaMayor += monto;
    } else if (monto > 500) {
        ventasIguales++;
        totalVentaIgual += monto;
    } else {
        ventasMenores++;
        totalVentaMenor += monto;
    }
}