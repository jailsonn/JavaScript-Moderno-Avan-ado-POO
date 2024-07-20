// Operador lógico or, ou ||
// esse operador pelomenos uma das condiçoes tem de 
// da verdadeira, para saida verdadeira.
var idade = 18;
var nome = "joão";

if (nome == "joão" || idade > 14) {
    console.log("Pelomenos uma das opções é verdade");
} else {
    console.log("As duas Opções são Falsas");
}

if (nome == "joão" && 15 < 20 || 10 == 10 ) {
    console.log("testando"); 
}