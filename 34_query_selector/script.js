//  Acessando os Elementos com o QuerySelector. tipo CSS seletor.

var intensClasse = document.getElementsByClassName('item');

console.log(intensClasse);

// querySelectorAll - Varios elementos
var itensQuery = document.querySelectorAll('#lista2 li');

console.log(itensQuery);


var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

// querySelector
// pega apenas um elemento
// var itensQuery3 = document.querySelector('#lista .item');
// console.log(itensQuery3);

var lista = document.querySelector('#lista');

console.log(lista);


var span = document.querySelector('#paragrafo span');
console.log(span);