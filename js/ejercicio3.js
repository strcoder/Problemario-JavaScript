title.innerHTML = 'Piramide de asteriscos';
subtitle.innerHTML = 'Digita los numeros de filas';
instructions.innerHTML = 'El numero debera ser entero y mayor a 0';
btnPrimary.innerHTML = 'Crear';

btnPrimary.style.display = 'grid';
item[2].style.display = 'grid';

// input[2].style.width = '100%';

btnPrimary.setAttribute('onclick', 'ejercicioTres()');

var piramideItem;

function ejercicioTres() {
    getNumberN()
    piramide(this.n);
}

function asteriscos(n) {
    var ast = '';
    for (let i = 0; i < n; i++) {
        ast += "* ";
    }
    piramideItem.innerHTML = `${ast}`;
}

function piramide(n) {
    result.innerHTML = '';
    if (n == 0 || isNaN(n)) {
        console.log('Error');
    } else {
        for (let i = 0; i <= n; i++) {
            piramideItem = document.createElement('LI');
            piramideItem.id = 'input-list-' + i;
            asteriscos((i * 2) - 1);
            fragment.appendChild(piramideItem);
        }
        result.appendChild(fragment);
        input[2].value = '';
    }
}

