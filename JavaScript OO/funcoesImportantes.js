const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso:12
}

console.log(Object.keys(pessoa))
//pegando os valores
console.log(Object.values(pessoa))
// pegar tudo
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})