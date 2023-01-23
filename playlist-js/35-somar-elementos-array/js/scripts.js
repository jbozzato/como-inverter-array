var arr = [1, 2, 3, 4, 5, 6]
var soma = 0

// for
for (var i = 0; i < arr.length; i++) {
  soma += arr[i]
}

console.log(soma)

// reduce
var arr2 = [1, 2, 3, 4, 5, 6]

var soma2 = arr.reduce(function (soma, i) {
  return soma + i
})

console.log(soma2)
