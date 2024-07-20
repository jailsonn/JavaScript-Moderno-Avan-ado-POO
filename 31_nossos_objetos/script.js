// Essa aula deu erro ao tentar inserir métodos
// dentro do objeto pessoa

let pessoa = {
    nome: "Murilo",
    idade: 5,
    sexo: "M",
    peso: 24.700,

    falar: function () {
        console.log("Olá, o meu nome é Murilo");
    },
    
    soma: function(a, b) {
        return a + b;
    }
    
    
};

console.log(pessoa);
//Acessar uma propriedade
console.log(pessoa.nome);
//metodo falar
pessoa.falar();

//console.log(pessoa.soma(2, 5));
var soma = pessoa.soma(2, 10);

console.log(soma);
