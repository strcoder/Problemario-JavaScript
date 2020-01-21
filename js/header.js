// *? **************************** ?* //
// ** Creando elementos del header ** //
// *? **************************** ?* //
for (let i = 0; i < 12; i++) {
    menuItem = document.createElement('LI');
    menuItem.innerHTML = `<button onclick="routes(this.value)" value="${i + 1}">Ejercicio ${i + 1}</button>`;
    menuItem.id = `menu-item-${i}`;
    menuItem.className = `menu-item-${i} menu-text`;
    fragment.appendChild(menuItem);
}
menuItem = document.createElement('LI');
menuItem.innerHTML = `<button onclick="routes(this.value)" value="13">Problema final</button>`;
menuItem.id = `menu-item-12`;
menuItem.className = `menu-item-12 menu-text`;
fragment.appendChild(menuItem);

menu.appendChild(fragment);
// *? **************************** ?* //
// ** Creando elementos del header ** //
// *? **************************** ?* //



// *? ************************************************************ ?* //
// ** Funcion para cambiar elementos HTML de acuerdo al Ejercicio  ** //
// *? ************************************************************ ?* //
function routes(index) {
    let element = document.getElementById(`page-src`);
    let menuFocus, menuNotFocus;

    // Eliminar resaltado de los elementos del menu
    for (let i = 0; i < 13; i++) {
        menuFocus = document.getElementById(`menu-item-${i}`);
        menuFocus.style.background = 'none';
        menuFocus.style.borderBottom = 'none';
    }

    // Elimina el archivo javascript que se esta utilizando para intercarmbiarlo por el nuevo
    if (element != null) { page.removeChild(element); }

    // Asignar el archivo javascript a utilizar dentro del HTML
    element = document.createElement("SCRIPT");
    element.src = `./js/ejercicio${index}.js`;
    element.id = `page-src`;
    document.getElementById("page").appendChild(element);

    //  Ocultar los elementos que no se utilizaran
    for (let i = 0; i < 9; i++) { item[i].style.display = 'none'; }

    for (let i = 0; i < 4; i++) { 
        input[i].value = '';
        input[i].display = 'none';
        input[i].disabled = false;
        input[i].setAttribute('placeholder', 'Numero');
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            itemList = document.getElementById(`matriz0-number-${i}-${j}`);
            itemList.value = '';
        }
    }
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            itemList = document.getElementById(`matriz1-number-${i}-${j}`);
            itemList.value = '';
        }
    }
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            itemList = document.getElementById(`matriz-result-number-${i}-${j}`);
            itemList.value = '';
        }
    }

    matrizResult.style.display = 'none'

    input[0].setAttribute('onkeypress', 'return numeroReal(event, this)');
    input[1].setAttribute('onkeypress', 'return numeroReal(event, this)');

    for (let i = 0; i < 3; i++) { text[i].innerHTML = ''; }

    for (let i = 0; i < 5; i++) { select[i] = document.getElementsByName(`select-${i}`); }

    for (let i = 0; i < 2; i++) { matriz[i] = document.getElementsByName(`matriz-${i}`); }

    result.innerHTML = '';
    matrices.style.display = 'none';
    inputNumbers.style.marginBottom = '2%';
    inputNumbers.style.gridTemplateColumns = '1fr';
    btnAdd.style.display = 'none';
    item[3].style.gridTemplateColumns = '1fr';
    buttons.style.display = 'grid';
    buttons.style.gridTemplateColumns = '1fr'
    btnSecondary.style.display = 'none';
    btnPrimary.disabled = false;

    // Resaltar elemento del menu seleccionado
    menuFocus = document.getElementById(`menu-item-${index - 1}`)
    menuFocus.style.borderBottom = '5px solid #ffffff';
    menuFocus.style.paddingBottom = '8px';
    
    // Asignando elementos de las variables utilizadas
    menuElement = index; array = []; nElement = 0; x = 0, y = 0, n = 0; days = [], shifts = [];
}
// *? ************************************************************ ?* //
// ** Funcion para cambiar elementos HTML de acuerdo al Ejercicio  ** //
// *? ************************************************************ ?* //