const str1 = "algum texto"
const str2 = ""

console.log(str1)
console.log(str2)

if (str1 == "") {
  console.log("Esta String esta vazia - " + str1)
}

if (str2 == "") {
  console.log("Esta String esta vazia - " + str2)
}

if (!str1) {
  console.log("Imprimindo str1")
}

if (!str2) {
  console.log("Imprimindo str2")
}
