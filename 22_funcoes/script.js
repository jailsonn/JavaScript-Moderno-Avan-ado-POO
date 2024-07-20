// Funções
// Nome da função, Verbo e Substantivo

function primeiraFuncao() {
    console.log("Hello Word das funções");

}

// Uma função pode ser chamada quantas vezes quiser
primeiraFuncao();
primeiraFuncao();
primeiraFuncao();

// Uma função tambem pode ter argumentos, parametros
function deizerNome(nome) {
    console.log("O meu nome é: " + nome);

}
deizerNome("Jailson da Silva");
deizerNome("Julia Theresa R. O. S");
deizerNome("Murilo Cavalcante R. O. S");

//se fosse puchar nome de um banco de dados
var nomeDoBancoDeDados = "joão";
deizerNome(nomeDoBancoDeDados);

// A Função tambem tem Retorno
function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);
console.log(somaUm);

//posso chamar assim tambem
console.log(soma(4, 6));