// Adicionar atributo
// Alterando atributo
// inserir atributo  -> setAttribute
var title = document.querySelector("#title");

// inseriondo uma classe com um nome
title.setAttribute("class", "testando-atributo");
console.log(title);

// ---------------------------
var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

// ----------------------------------
var subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id", "titulo-2");


//  Remover atributo
var lista = document.querySelector("#lista");
lista.removeAttribute("id");
