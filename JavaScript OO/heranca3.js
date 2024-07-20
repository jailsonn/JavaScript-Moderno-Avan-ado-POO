const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corCabelo)
//filha1.nome = 'Julia'
//filha1.corCabelo = 'Castanho'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true,}
    
})
console.log(filha2.nome)
console.log(filha2.corCabelo)

// Mudando a filha2 e criando no templeit string
filha2.nome = "Carla"
//console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelos ${filha2.corCabelo}`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// for in, pra saber se um produto pertense ou nao a quele objeto
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}