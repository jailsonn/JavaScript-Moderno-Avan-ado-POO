// vamos Acessar os Elemetos do DOM 
// Acessando os Elementos do Dom no modo convencional

// tag  -  Obs. TagName é no plural mais de um elemento
var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');

console.log(lis[3]);


// id ----------------------Obs ById estpa no Singular
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);


// class  --------------
// var itensDaLista = document.getElementsByClassName('item');
// console.log(itensDaLista);

var itemsDaLista = document.getElementsByClassName('item');
console.log(itemsDaLista);
