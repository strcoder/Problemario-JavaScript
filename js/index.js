// *? ***************************************** ?* //
// ** Iniciando variables de los elementos HTML ** //
// *? ***************************************** ?* //
const menu = document.getElementById('menu-list');
const fragment = document.createDocumentFragment();
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const instructions = document.getElementById("instructions");
const buttons = document.getElementById("buttons");
const btnPrimary = document.getElementById("btn-primary");
const btnSecondary = document.getElementById("btn-secondary");
const btnAdd = document.getElementById("btn-add");
const page = document.getElementById("page");
const inputNumbers = document.getElementById("input-list");
const result = document.getElementById("result");
const matrices = document.getElementById("matrices");
const matrizResult = document.getElementById("matriz-result");
const xText = document.getElementById("producto");
const date = document.getElementById("date");
// *? ***************************************** ?* //
// ** Iniciando variables de los elementos HTML ** //
// *? ***************************************** ?* //



// *? ****************************** ?* //
// ** Iniciando variables a utilizar ** //
// *? ****************************** ?* //
var item = [], input = [], text = [], select = [], matriz = [], matriz1 = [], matriz2 = [];
var menuItem, itemList, array = [], nElement = 0, menuElement = 0, x = 0, y = 0, n = 0;
var days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
var shifts = ['Matutino', 'Vespertino'];
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
// *? ****************************** ?* //
// ** Iniciando variables a utilizar ** //
// *? ****************************** ?* //



// *? **************************************************** ?* //
// ** Iniciando variables dinamicas con los elementos HTML ** //
// *? **************************************************** ?* //
for (let i = 0; i < 9; i++) { item[i] = document.getElementById(`item-number-${i}`); }

for (let i = 0; i < 4; i++) { input[i] = document.getElementById(`input-number-${i}`); }

for (let i = 0; i < 3; i++) { text[i] = document.getElementById(`text-number-${i}`); }

for (let i = 0; i < 5; i++) { select[i] = document.getElementById(`select-${i}`); }

for (let i = 0; i < 2; i++) { matriz[i] = document.getElementById(`matriz-${i}`); }
// *? **************************************************** ?* //
// ** Iniciando variables dinamicas con los elementos HTML ** //
// *? **************************************************** ?* //