// MÉTODOS DE STRING PARTE 2

// tolowerCase e toUpperCase
// esse método modifica de letra maiusculas para minusculas
var frase = "Essa é a Frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());

// trim
// esse metodo remove espaços
var nome = "     Matheus      ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split
// asvezes vc quer mandar o método como arrei
console.log(frase.split(" "));
 
var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf
// entra a ultima da palavra
var fraseDois = "Eu quero a ultima palavra";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));

