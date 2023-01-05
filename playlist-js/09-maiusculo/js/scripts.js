const texto = "CONVERTER ESTE TEXTO PARA MAIÚSCULA SÓ A PRIMEIRA LETRA, TA OK?"
const texto2 = "converta este texto agora"
const texto3 = "CoNvErTa EsTe TeXtO AgORa"

function capitalizeFrist(str) {
  const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })

  return subst
}

console.log(capitalizeFrist(texto))
console.log(capitalizeFrist(texto2))
console.log(capitalizeFrist(texto3))
