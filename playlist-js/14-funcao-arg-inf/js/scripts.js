// Criar uma função que receba argumentos Infinitos
function somaInfinita() {
  console.log(arguments) // Objetos com todos os argumentos

  var args = [].slice.call(arguments, 0)

  console.log(args)

  var soma = 0

  for (var i = 0; i < args.length; i++) {
    soma += args[i]
  }

  return soma
}

var soma1 = somaInfinita(1, 2, 3)
var soma2 = somaInfinita(13, 3423, 123, 3, 123, 3, 39, 38, 4, 6)
var soma3 = somaInfinita(5, 2)

console.log(soma1)
console.log(soma2)
console.log(soma3)
