// Vamos trabalhar puramente com javascript

function exibir(num) {
    console.log("A operação resultou em:" + num);
}

// Callback ou cb
function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

// chamando as funções
soma(2, 2, exibir);

multiplicacao(2, 4, exibir);