// Arrow Function

let a = 5
let b = 10

let c = (num1, num2) => num1 + num2

console.log(c(a, b))

let d = (x, y) => {
  return op
}

console.log(d(a, b))

// um argumento
let frase = "O Daniel é um pessimo dev"

let fraseArray = (frase) => frase.split("Não tenho Argumento POBRE")

semArg()

// Casos de uso
let roupas = [
  { produto: "camisa", preco: 25, cor: "Amarelo" },
  { produto: "calça", preco: 80, cor: "Azul" },
  { produto: "Jaqueta", preco: 100, cor: "Preto" },
  { produto: "camiseta", preco: 15, cor: "Rosa" },
  { produto: "calção", preco: 20, cor: "Azul" },
]

let precoMaiorQue50 = roupas.filter((roupa) => {
  return roupa.preco >= 50
})

console.log(precoMaiorQue50)

setTimeout(() => {
  console.log("Deu tempo!")
}, 150)

// setTimeout(function() {
// console.log("Deu tempo!")
// }, 150)

// Não Usar Arrow

let pessoa = {
  nome: "Matheus",
  sayName: () => {
    console.log(this.nome)
    console.log(this)
  },
}

pessoa.sayName()
