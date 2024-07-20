// MÉTODOS DE STRING

// length
// esse método da a quantidade ou comprimento de caracteres

var nome = "Matheus";
 
console.log(nome.length);

var obj = "bola";

console.log(obj.length);


// indexOf
// acha a letra da frase pelo index no caso de matheus é t
console.log(nome[2]);


var frase = "o rato roeu a roupa do rei de roma";

console.log(frase.indexOf("roeu"));

// slice
// extrair uma palavra da frase
var roeu = frase.slice(7, 11);
console.log(roeu);

// replace
// trocar palavras na frase
var novaFrase = frase.replace("roupa", "vestido");
console.log(novaFrase);

