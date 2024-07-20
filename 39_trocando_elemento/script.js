// criar um elemento
// ou seja; substiturir um paragrafo por uma div ex
var el = document.createElement("h3");
// colocando uma classe no elemento q criei
el.classList = "testando-classe";
// console.log(el);

var texto = document.createTextNode("esse é o texto que eu criei");
el.appendChild(texto);

console.log(el);


// Selecionar o Elemento que eu quero trocar
var title = document.querySelector("#title");

console.log(title);


// Selecionar o pai do el
// var body = document.querySelector("body");
var pai = title.parentNode;

// -------------------------------------
// Trocar os Elementos 
pai.replaceChild(el, title); //el- vai entrar, e title- vai sair.
