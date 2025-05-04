// Tudo que estiver fora das funções é Escopo Global
// Ex;.
var x = 8;

var y = 3;

console.log(x, y);

// Escopo Local teste
// Exemplo:.
function teste() {

    var z = 4 * 5;

    console.log(z);
    // tambem posso acessar as variaveis do global na funçao
    console.log(x);
    console.log(y);

}
// Não esquecer de chamar a função
teste();
 
// outro Exmplo:.
function testando() {

    var z = 5;
    console.log(z);

}
// uma variavel no escopo local, nunca se mistura com o global
testando();
