title.innerHTML = 'Suma parcial de potencias';
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
btnPrimary.setAttribute('onclick', 'ejercicioDos()');

function ejercicioDos() {
    let text = '';
    getNumberX();
    getNumberN();
    if (isNaN(x) || isNaN(n)) {
        console.log('Error');
    } else {
        text += `<h2>Numero X = ${this.x}</h2>`;
        text += `<h2>Numero N = ${this.n}</h2>`;
        text += `<h2>Resultado = ${potencia(this.x, this.n)}</h2>`;
        result.innerHTML = text;
    }

    x = 0; n = 0;
    input[0].value = '';
    input[2].value = '';
}

function potencia(x, n) {
    if (n == 0) {
        return 1;
    } else {
        return Math.pow(x, n) + potencia(x, n-1);
    }
}
