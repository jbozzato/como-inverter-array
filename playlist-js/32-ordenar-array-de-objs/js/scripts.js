var pessoas = [
  {
    nome: "João",
    idade: 29,
  },
  {
    nome: "Pedro",
    idade: 18,
  },
  {
    nome: "Maria",
    idade: 40,
  },
  {
    nome: "Alan",
    idade: 69,
  },
]

// Sort
pessoas.sort(function (a, b) {
  if (a.nome < b.nome) {
    return -1
  } else {
    return true
  }
})

console.log(pessoas)

var pessoas = [
  {
    nome: "João",
    idade: 99,
  },
  {
    nome: "Pedro",
    idade: 18,
  },
  {
    nome: "Maria",
    idade: 40,
  },
  {
    nome: "Alan",
    idade: 69,
  },
]

pessoasB.sort(function (a, b) {
  if (a.idade < b.idade) {
    return -1
  } else {
    return true
  }
})

console.log(pessoas)
