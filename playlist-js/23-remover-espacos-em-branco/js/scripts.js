var str = "Esta string   tem  algums      espaços     desnecessario"
console.log(str)

console.log(str.replace(/( )+/g, " "))

function removerEspacosDuplicados(str) {
  return str.replace(/( )+/g, " ")
}

console.log(removerEspacosDuplicados("Olá                    mundo!"))
console.log(removerEspacosDuplicados("A função         Funcionou    mesmo!"))
