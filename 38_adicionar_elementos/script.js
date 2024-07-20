// Criar elemento
// Aqui eu criei uma div e uma classe de nome div-criada
var el = document.createElement('div');
//classList setar e adicionar classes
el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");
// colocando o elemento el dentro do id container
// inserindo elemento filho
container.appendChild(el);


// Tambem tem outra forma de inserir elementos na pagina
// inserBefore - insere antes
var el2 = document.createElement("div");
el2.classList = "div-before";
//inserir dentro da div-criada
var el3 = document.querySelector("#container .div-criada");
console.log(el3);

container.insertBefore(el2, el3); //elemento inserido e a referencias


