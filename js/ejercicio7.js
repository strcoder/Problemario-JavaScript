title.innerHTML = 'Triangulo de Pascal';
subtitle.innerHTML = 'Digita los numeros de filas';
instructions.innerHTML = 'El numero debera de ser entero y mayor a 0';
btnPrimary.innerHTML = 'Crear';

btnPrimary.style.display = 'grid';
item[2].style.display = 'grid';

btnPrimary.setAttribute('onclick', 'ejercicioSiete()');

function ejercicioSiete() {
    getNumberN();
    if (isNaN(n) || n <= 0) {
        
        result.innerHTML = '¡¡ERROR!!';
    } else {
        triangulo();
    }
}

function triangulo() {
    //creamos la matriz bidimensional A(n,n)  
    var A = new Array(n);
    //alimentamos la matriz  
    for (i = 1; i <= n; i++) {
        A[i] = new Array(n);
        for (j = 1; j <= i; j++) {
            A[i][j] = combina(i - 1, j - 1);
        }
    }
    //imprimimos los resultados  
    var texto = '';
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            texto += A[i][j];
            texto += " ";
        }
        texto += "<br>";
    }

    result.innerHTML = texto;
    input[2].value = '';
}

//función que calcula el número combinatorio p sobre q  
function combina(p, q) {
    return Math.round(factorial(p) / (factorial(q) * factorial(p - q)));
}

//función que calcula el factorial  
function factorial(h) {
    var f = 1;
    if (h !== 0) {
        for (k = 1; k <= h; k++) {
            f *= k;
        }
    }
    return f;
}  