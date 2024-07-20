// primeira classe
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome

    }
}

// Criando a 2ª classe q extends
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome)
    this.profissao = profissao
    }
}

// Criar a 3ª classe Filho que extendes a classe Pai
class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

// instanciando
const filho = new Filho
console.log(filho)
