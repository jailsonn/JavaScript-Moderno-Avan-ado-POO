var obj = {
    nome: 'Jailson',
    idade: 43,
    profissao: 'Programador'
};

console.log(obj);
console.log(typeof obj);
console.log('-----------');

// como que eu acesso um objeto?
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

// pode usar o objeto com uma variavel ex
console.log("O meu Nome é: " + obj.nome);

// Alterando o Objeto
// posso mudar o intem ou propriedade do objeto ex:
obj.nome = 'Pedro';
obj.idade = 30;
obj.profissao = 'Dev Front';

// concatenar texto mais o objeto
console.log("O meu Nome é: " + obj.nome);
console.log("A minha idade: " + obj.idade);
console.log('----------------------------');


// tambem posso criar propriedades dentro do objeto ex:
obj.graduacao = true;
obj.faculdade = 'Unicid';

console.log(obj);
