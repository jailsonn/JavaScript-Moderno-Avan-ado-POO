// Cadeia de protótipos (prototype chain)
const carro = {
    valAtual: 0,
    valMax: 200,
    acelerarMais(delta) {
        if (this.valAtual + delta <= this.valMax) {
            this.valAtual += delta
        } else {
            this.valAtual = this.valMax
        }
    },
    status() {
        return `${this.valAtual}km/h de ${this.valMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    valMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
    return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

//chama os metodos
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())