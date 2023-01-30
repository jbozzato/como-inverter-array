// expressão regular
var cnpj = "373565420000101"

// replace
// /^(/d{2})(/d{3})(/d{3})(/d{4})(/d{2})/
// "$1.$2.$3/$4-$5"

console.log(cnpj)
console.log(
  cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
)
