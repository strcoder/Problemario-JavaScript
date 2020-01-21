// *? ********************************************************** ?* //
// ** Funcion para detectar numeros reales dentro de los inputs  ** //
// *? ********************************************************** ?* //
/* event: evento; input: elemento; */
function numeroReal(event, input) {
    let key = (document.all) ? event.keyCode : event.which;
    let chark = String.fromCharCode(key);
    let tempValue = input.value + chark;

    // Permite 4 numeros despues del punto
    if (key >= 48 && key <= 57) {
        if (filter(tempValue) === false) { return false;} 
        else { return true; }
    }

    // Permite un solo punto decimal
    if (input.value.indexOf('.') == -1 ? key == 46 : false) { return true; }

    // Permite números negativos (después de escribir un número)
    if (key == 45 && input.value !== '') { input.value = (-1) * input.value; }

    // Permite tecla de retroceso (borrar) y tecla tab
    if (key == 8 || key == 9) { return true; }

    // Permite tecla de enter y realiza determinada funcion
    if (key === 13) {
        if (this.input[0] === input) {
            getNumberX(input)
        } else if (this.input[1] === input) {
            getNumberY(input);
        } else if (this.input[2] === input) {
            getNumberN(input);
        } else if (this.input[3] === input) {
            getNumberArray(input);
        } else {
            getNumberMatriz(input);
        }
    }

    // Patrón de entrada: solo acepta numeros positivos
    var patron = /[0-9]/;
    endKey = String.fromCharCode(key);
    return patron.test(endKey);
}
// *? ********************************************************** ?* //
// ** Funcion para detectar numeros reales dentro de los inputs  ** //
// *? ********************************************************** ?* //



// *? ********************************************** ?* //
// ** Funcion para el formato con numeros decimales  ** //
// *? ********************************************** ?* //
function filter(__val__) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if (preg.test(__val__) === true) {
        return true;
    } else {
        return false;
    }
}
// *? ********************************************** ?* //
// ** Funcion para el formato con numeros decimales  ** //
// *? ********************************************** ?* //


// *? ********************************************************** ?* //
// ** Funcion para detectar numeros enteros dentro de los inputs  ** //
// *? ********************************************************** ?* //
function numeroEntero(event, input) {
    var key = (document.all) ? event.keyCode : event.which;

    if (key >= 48 && key <= 57) {
        return true;
    } else if (key === 13) {
        getNumberN(input);
    } else {
        return false
    }
}
// *? ********************************************************** ?* //
// ** Funcion para detectar numeros enteros dentro de los inputs  ** //
// *? ********************************************************** ?* //



// *? ************************************************************** ?* //
// ** Funcion para detectar numeros y asignarlos dentro de un array  ** //
// *? ************************************************************** ?* //
function getNumberArray(input) {
    input = isNaN(input) ? this.input[3] : input;
    let inputNumber = isNaN(parseFloat(input.value)) ? NaN : parseFloat(input.value);
    
    if (isNaN(inputNumber)) {
        console.log('Error');
        input.setAttribute('placeholder', '!!ERROR¡¡ Digita un numero');
        return;
    } else {
        input.setAttribute('placeholder', 'Numero');
        array[nElement] = inputNumber;
        input.value = '';
        nElement++;
        if (n != 0 && nElement >= n) {
            input.disabled = true;
            btnPrimary.disabled = false;
        }
    }
    result.innerHTML = `Numeros = ${array} `
}
// *? ************************************************************** ?* //
// ** Funcion para detectar numeros y asignarlos dentro de un array  ** //
// *? ************************************************************** ?* //



// *? ************************************************************** ?* //
// ** Funcion para detectar numeros y asignarlos dentro de un array  ** //
// *? ************************************************************** ?* //
function getNumberMatriz(input) {
    
    let inputNumber = isNaN(parseFloat(input.value)) ? NaN : parseFloat(input.value);
    
    if (isNaN(inputNumber)) {
        console.log('Error');
        input.setAttribute('placeholder', '!!ERROR¡¡');
        return;
    } else {
        input.setAttribute('placeholder', 'Numero');
    }
}

// *? ************************************************************** ?* //
// ** Funcion para detectar numeros y asignarlos dentro de un array  ** //
// *? ************************************************************** ?* //



// *? ********************************** ?* //
// ** Funcion para detectar el numero x  ** //
// *? ********************************** ?* //
function getNumberX(input) {
    input = isNaN(input) ? this.input[0] : input;

    let inputNumber = isNaN(parseFloat(input.value)) ? NaN : parseFloat(input.value);
    
    if (isNaN(inputNumber)) {
        console.log('Error');
        input.setAttribute('placeholder', '!!ERROR¡¡ Digita un numero');
        x = NaN;
        return;
    } else {
        input.setAttribute('placeholder', 'Numero');
        x = inputNumber;
        this.input[2].focus();
    }

    // input[1].focus(); // usar
}
// *? ********************************** ?* //
// ** Funcion para detectar el numero X  ** //
// *? ********************************** ?* //



// *? ********************************** ?* //
// ** Funcion para detectar el numero Y  ** //
// *? ********************************** ?* //
function getNumberY(input) {
    input = isNaN(input) ? this.input[1] : input;

    let inputNumber = isNaN(parseFloat(input.value)) ? NaN : parseFloat(input.value);
    
    if (isNaN(inputNumber)) {
        console.log('Error');
        input.setAttribute('placeholder', '!!ERROR¡¡ Digita un numero');
        return;
    } else {
        input.setAttribute('placeholder', 'Numero');
        y = inputNumber;
    }
}
// *? ********************************** ?* //
// ** Funcion para detectar el numero Y  ** //
// *? ********************************** ?* //



// *? ********************************** ?* //
// ** Funcion para detectar el numero N  ** //
// *? ********************************** ?* //
function getNumberN(input) {
    input = isNaN(input) ? this.input[2] : input;

    let inputNumber = isNaN(parseFloat(input.value)) ? NaN : parseFloat(input.value);
    
    if (inputNumber < 0 || isNaN(inputNumber)) {
        console.log('Error');
        input.setAttribute('placeholder', '!!ERROR¡¡ Digita un numero valido');
        n = NaN
        return;
    } else {
        input.setAttribute('placeholder', 'Numero');
        n = inputNumber;
    }
}
// *? ********************************** ?* //
// ** Funcion para detectar el numero N  ** //
// *? ********************************** ?* //