// mapear eventos de teclas

// keydown
// adicionar o parametro event na function
document.addEventListener("keydown", function(event) {

  // console.log(event.key);
  if(event.key === "Enter") {
    console.log("Apretou Enter");
  }

});


// keyup
// asvezes é mais intereçante usar o keyup do que o keydown
document.addEventListener("keyup", function(e) {

  if(event.key === "Enter") {
    console.log("Soltou o Enter");
  }
});