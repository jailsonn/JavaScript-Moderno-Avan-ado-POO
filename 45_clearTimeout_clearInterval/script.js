// CearTimeout na prática
// pra parar ele, encapsula em uma variavel
var x = 0;

var myTimer = setTimeout(function () {
  console.log("o x é 0");
}, 1500);

x = 5;

if (x > 0) {
  clearTimeout(myTimer);
  console.log("O x passou de 0");
}

// CleartInterval na prática
// essa esta em uma Arrow functio, mas é o mesmo sentido.
var myInterval = setInterval(() => {
  console.log("Imprimindo intervalo");
}, 500);

// limpar
setTimeout(() => {
  console.log("Não precisamos mais repetir!");
  clearInterval(myInterval);
}, 1500);
