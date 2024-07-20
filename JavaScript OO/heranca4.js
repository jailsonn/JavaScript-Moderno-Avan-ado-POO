function MeuObjeto() {}
console.log(MeuObjeto.prototype)
// Sabemos que esse atributo existe e é um objeto

// criando dois objetos, e vendo se eles aponta pra o mesmo objeto
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

