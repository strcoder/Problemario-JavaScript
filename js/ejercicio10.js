title.innerHTML = 'Funcion exponencial';
subtitle.innerHTML = 'Digite los numeros';
instructions.innerHTML = 'El numero x (numero real) y n (entero)';
text[0].innerHTML = 'X = ';
text[2].innerHTML = 'N = ';

item[0].style.display = 'grid';
item[0].style.gridTemplateColumns = '0.1fr 1fr'
item[2].style.display = 'grid';
item[2].style.gridTemplateColumns = '0.1fr 1fr'

btnPrimary.style.display = 'grid';
btnPrimary.innerHTML = 'Calcular';
btnPrimary.setAttribute('onclick', 'ejercicioDiez()');

function ejercicioDiez() {
    let text = '';
    getNumberX();
    getNumberN();

    if (isNaN(x) || isNaN(n) || n < 0) {
        result.innerHTML = '¡¡ERROR!!';
    } else {
        text += '<h2>Resultado</h2>'

        text += funcionExponencial();

        result.innerHTML = text;
        input[0].value = '';
        input[2].value = '';
    }
}

function funcionExponencial() {
    var texto = '<p class="plus"> e <sup>x</sup> = 1 ';

    for (let i = 1; i < n; i++) {
        texto += `+ <sup>${x}<sup>${i}</sup></sup>/<sub>${i}!</sub> `;
        
    }
    texto += '</p>'

    return texto;
}