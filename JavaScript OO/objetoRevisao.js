// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// vc tambem pode deletar atributos
delete produto.preco
delete produto['marca do produto']

console.log(produto)

// criar um objeto carro mas complexo
const carro = {
    modelo: 'Ae',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABCD',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValoreSeguro: function() {
        // ...
    }
}
// acessar
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// Deletar os objetos e as funçoes
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValoreSeguro
console.log(carro)
