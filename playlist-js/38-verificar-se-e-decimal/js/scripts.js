function isFloat(n) {
  if (!isNaN(n)) {
    if (parseInt(n) != parseFloat(n)) {
      return true
    }
  }

  return false
}

console.log(isFloat("teste"))
console.log(isFloat(5))
console.log(isFloat("999"))
console.log(isFloat("12.4"))
console.log(isFloat(3424.12))
