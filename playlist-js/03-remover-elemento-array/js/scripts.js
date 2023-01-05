// pop --> fim array

let arr = [1, 2, 3, 4, 5]
let remover = arr.pop()

console.log(arr)
console.log(remover)

// shift --> começo da array

let nomes = ["matheus", "joao", "pedro"]
let nome = nomes.shift()

console.log(nome)
console.log(nomes)

// splice --> remover pelo índice do el

let numbers = [1, 2, 3, 4, 5]

let number = numbers.sploce(1, 1)

console.log(number)
console.log(numbers)

let subarray = numbers.splice(0, 3)

console.log(subarray)
console.log(numbers)
