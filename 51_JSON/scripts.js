// Obs. Náo é um JSON valido, é um objeto javaScript
const objs = [
  {
    nome: "Jailson",
    idade: 40,
    esta_trabalhando: true,
    hobbies: ["Programar", "Inofmatica", "Estudar"],
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "Empresa x",
    },
  },
  {
    nome: 'Murilo',
    idade: 6,
    esta_trabalhando: false,
    hobbies: ['Jogar', 'Assistir', 'Patinet'],
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
  },
];

console.log(objs);

//  JSON
// converter objeto para json
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);


// converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

// da um map metodo de arrey pra percorrer
objData.map((pessoa)=> {
    console.log(pessoa.nome);
})
