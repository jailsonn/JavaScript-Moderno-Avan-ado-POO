// Eventos de Click

var btn = document.querySelector("#btn");
console.log(btn);

// um EventListener e uma callbeck function
// trabalhando com elementos o this se refere a ele próprio
btn.addEventListener("click", function() {

  console.log("clicou");

  this.style.color = "red";

});

// click afetando outros elementos
// colocando o Evento no titulo tambem
var title = document.querySelector("#title");

title.addEventListener("click", () => {

  // sumir o subtitle ao clicar no title...
  var subtitle = document.querySelector(".subtitle");

  subtitle.style.display = "none";

  console.log("clicou no titulo");


});


//  double click
// click duplos
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", () => {

  console.log("click duplo!");

});