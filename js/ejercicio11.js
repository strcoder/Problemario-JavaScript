title.innerHTML = 'Coordenadas polares y cartesianas';
subtitle.innerHTML = 'Digite los numeros';
instructions.innerHTML = 'El numero X (numero real) y Y (numero real)';
text[0].innerHTML = 'X = ';
text[1].innerHTML = 'Y = ';
btnPrimary.innerHTML = 'Calcular';

item[0].style.display = 'grid';
item[0].style.gridTemplateColumns = '0.1fr 1fr'
item[1].style.display = 'grid';
item[1].style.gridTemplateColumns = '0.1fr 1fr'

btnPrimary.style.display = 'grid';
btnPrimary.setAttribute('onclick', 'ejercicioOnce()');

function ejercicioOnce() {
    let punto;
    
    getNumberX();
    getNumberY();

    if (isNaN(x) || isNaN(y)) {
        result.innerHTML = '¡¡ERROR!!';
    } else {
        punto = new Punto(x, y);
        printCoordenadas(punto);
        input[0].value = '';
        input[1].value = '';
    }
    
}

function printCoordenadas(punto) {
    let texto = '';

    texto += `<h2 class="subtitle">Coordenadas cartesianas</h2>`;
    texto += `<p>${punto.toStringCartesianas()}</p>`;
    texto += `<h2 class="subtitle">Coordenadas polares</h2>`;
    texto += `<p>${punto.toStringPolares()}</p>`;

    result.innerHTML = texto;
}