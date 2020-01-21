// *? ************************************ ?* //
// ** Creando opciones de los menus select ** //
// *? ************************************ ?* //
// Select dias semana
for (let i = 0; i < days.length; i++) {
    itemList = document.createElement('OPTION');
    itemList.innerHTML = `${days[i]}`;
    itemList.id = `option-day-${i}`;
    itemList.value = i;
    fragment.appendChild(itemList);
}
select[0].appendChild(fragment);

// Select turnos
for (let i = 0; i < shifts.length; i++) {
    itemList = document.createElement('OPTION');
    itemList.innerHTML = `${shifts[i]}`;
    itemList.id = `option-shift-${i}`;
    itemList.value = i;
    fragment.appendChild(itemList);
}
select[1].appendChild(fragment);

// Select dias de mes
for (let i = 1; i <= 31; i++) {
    itemList = document.createElement('OPTION');
    itemList.innerHTML = `${i}`;
    itemList.id = `option-day-number-${i}`;
    itemList.value = i;
    fragment.appendChild(itemList);
}
select[2].appendChild(fragment);

// Select meses
for (let i = 0; i < months.length; i++) {
    itemList = document.createElement('OPTION');
    itemList.innerHTML = `${months[i]}`;
    itemList.id = `option-month-${i}`;
    itemList.value = i;
    fragment.appendChild(itemList);
}
select[3].appendChild(fragment);

// Select años
for (let i = 1990; i <= 2020; i++) {
    itemList = document.createElement('OPTION');
    itemList.innerHTML = `${i}`;
    itemList.id = `option-year-${i - 1989}`;
    itemList.value = i;
    fragment.appendChild(itemList);
}
select[4].appendChild(fragment);
// *? ************************************ ?* //
// ** Creando opciones de los menus select ** //
// *? ************************************ ?* //



// *? *************************************** ?* //
// ** Creando input para llenar las matrices  ** //
// *? *************************************** ?* //
// Matriz 1
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        itemList = document.createElement('INPUT');
        itemList.type = 'text'
        itemList.setAttribute('placeholder', 'Numero');
        itemList.setAttribute('onkeypress', 'return numeroReal(event, this)');
        itemList.id = `matriz0-number-${i}-${j}`;
        itemList.value = '';
        itemList.className = 'input input-matriz';
        fragment.appendChild(itemList);
    }
}
matriz[0].appendChild(fragment);

// Matriz 2
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        itemList = document.createElement('INPUT');
        itemList.type = 'text'
        itemList.setAttribute('placeholder', 'Numero');
        itemList.setAttribute('onkeypress', 'return numeroReal(event, this)');
        itemList.id = `matriz1-number-${i}-${j}`;
        itemList.value = '';
        itemList.className = 'input input-matriz';
        fragment.appendChild(itemList);
    }
}
matriz[1].appendChild(fragment);

// Matriz Resultante
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        itemList = document.createElement('INPUT');
        itemList.type = 'text'
        itemList.setAttribute('placeholder', 'Numero');
        itemList.setAttribute('onkeypress', 'return esNumR(event, this)');
        itemList.id = `matriz-result-number-${i}-${j}`;
        itemList.value = '';
        itemList.className = 'input input-matriz';
        itemList.disabled = true;
        fragment.appendChild(itemList);
    }
}
matrizResult.appendChild(fragment);
// *? *************************************** ?* //
// ** Creando input para llenar las matrices  ** //
// *? *************************************** ?* //