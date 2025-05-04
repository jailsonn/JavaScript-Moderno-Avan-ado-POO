// Método de array

// langth => quantidade de propriedades
var arr = [1,2,3,4,5];

console.log(arr.length);

// push
// adicionar propriedades ao final do array
arr.push(6);
arr.push("posso add qualquer coisa");

console.log(arr.length);
console.log(arr);

// pop
// esse método removo elemento do array no fim

arr.pop();
console.log(arr);

// unshift
// Adicionar no inicio do array
arr.unshift(0);
console.log(arr);

// shift
// Remove do começo
arr.shift();
console.log(arr);

// acessar o último elemento do arrei
console.log(arr[arr.length -1]);

// isArray
// Esse método verifica se é um arrei
console.log(Array.isArray(5));
console.log(Array.isArray(arr));
