// Criar um elemento
var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);


//agora inser texto no paragrafo q eu criei acima ->
var texto = document.createTextNode("Este é o conteúdo do paragráfo");

novoParagrafo.appendChild(texto);
console.log(novoParagrafo);


// inserir o elemento no body
// Metodo que isere elementos -> appendChild
var body = document.querySelector("body");
console.log(body);

body.appendChild(novoParagrafo);
// -------------------------------------------

// inserir em um container
// pode ser o: getElementById ou querySelector
var container = document.getElementById("container");
console.log(container);

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));
console.log(el);

// inserir no containe
container.appendChild(el);

// ---------------------------------------------------
// Criando um Elemento h1 e depois inserindo testo nele.
var novoTitle = document.createElement("h1");
console.log(novoTitle);
// inseriondo o texto no h1
var textoh1 = document.createTextNode("TITULO CRIADO");
novoTitle.appendChild(textoh1);
//  inserir o elemento no body
var corpo = document.querySelector("body");
console.log(corpo);
corpo.appendChild(novoTitle);
