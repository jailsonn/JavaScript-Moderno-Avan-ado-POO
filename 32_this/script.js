// Tudo é Objeto
// O this vem do objeto window
console.log(this);


// alert('Olá!');
// this.alert('Olá! 2');

var teste = 10;

// O this é um Objeto Grobal do window.
console.log(teste);
console.log(this.teste);

let pessoa = {
    nome: "Jailsonn",
    idade: 5,
    sexo: "M",
    peso: 24.700,

    falar: function () {
        console.log("Olá, o meu nome é Murilo");
    },

    dizerNome: function() {
        console.log("O seu nome é: " + this.nome);
    },

    // tambem podemos alterar as propriedades alem de chamar
    aniversario: function() {
        this.idade += 3;
    }
    
};

pessoa.falar();
pessoa.dizerNome(); //chamando o metodo que esta dentro do Objeto pessoa

console.log(pessoa.idade);
pessoa.aniversario();
// pessoa.aniversario();
// pessoa.aniversario();


console.log(pessoa.idade);