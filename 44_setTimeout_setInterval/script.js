// SetTimeout
// Obs. uma função que é passada como argumento pra outra é uma callbeck
console.log("Antes do setTimeout"); //sincrona

setTimeout(function() {

    console.log("Testando o setTimeout"); //Assincrona

}, 2000); //2 segundos

console.log("Depois do setTimeout"); //sincrona


// setInterval
// essa funciona como se fosse um lup, cuidados
setInterval(function() {

    console.log("Testando setInterval");

}, 1000);