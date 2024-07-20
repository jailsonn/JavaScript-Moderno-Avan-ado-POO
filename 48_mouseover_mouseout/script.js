// Eventos Mouseouver e Mouserout, entrando e saindo no elemento


// evento de mouseover
var title = document.querySelector("#title");

console.log(title);

// Agora é só passar o evento e a callbeck
// callback anonima (ou com uma arrow function asvezes nao funciona)
title.addEventListener("mouseover", function() {

  this.style.backgroundColor = "yellow";

});


// evento de mouseout
title.addEventListener("mouseout", function() {

  this.style.backgroundColor = "blue";

});


// afetar outro elemento com mouseover
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {

  var legenda = document.querySelector("#legenda");

  legenda.classList.remove("hide");
  
});


subtitle.addEventListener("mouseout", function() {

  var legenda = document.querySelector("#legenda");

  legenda.classList.add("hide");

});