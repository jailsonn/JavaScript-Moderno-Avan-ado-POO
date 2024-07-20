window.onload = function() {

  console.log("Carregou o DOM");

  //tem de carregar dentro do Domo, o onload precisa q todos esteja carregados
  var title2 = document.querySelector("#title");

  console.log(title2);

}

console.log("Carregou o js");
// esse elemeno esta null pq o script esta sendo iniciado antes dele.
var title = document.querySelector("#title");
console.log(title);