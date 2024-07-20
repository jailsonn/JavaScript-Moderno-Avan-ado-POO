// Adicionando  CSS DOM

// Seleciona o Elemento
var title = document.querySelector("#title");


//  Adiciona o Estilo
title.style.color = "red";

// background-color  -> no dom Tem de juntar as palavras
// o stilo sempre fica inline, e sobreescreve todos os outros ok.
title.style.backgroundColor = "yellow";

// ------------------------------------------
// selecionar elemento
var subtitle = document.querySelector(".subtitle");

// adicionando vários elementos
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px";


