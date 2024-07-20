// primeiro método é:

// splice
var arr = [1,2,3,4,5];

//adiciona no meio depois do 2
arr.splice(2, 0, 999);
console.log(arr);

// remove elemento especifico
arr.splice(4, 1);
console.log(arr);

// indexOf
// indentifica o index do elemento do arrei
console.log(arr.indexOf(5));


// join
// transforma arrei em uma String
var arr2 = ["o", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" ")) // tambem pode colocar ,

// reverse
// inverte a ordem dos elementos do arrei
console.log(arr2.reverse());

