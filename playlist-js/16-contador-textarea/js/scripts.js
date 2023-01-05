const desc = document.querySelector("#descricao")

console.log(desc)

desc.addEventListener("keypress", function (e) {
  var inputLegth = desc.ariaValueMax.length
  const maxChars = 20

  if (inputLegth >= maxChars) {
    e.preventDefault()
    console.log("maximo aceito 20 digitos")
  }
})
