const ferrari = {
    modelo: 'F40',
    valMax: 324
}

const volvo = {
    modelo: 'V40',
    valMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
