var arrObjs = [
  { id: 1, name: "Matheus" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Maria" },
  { id: 4, name: "roberto" },
]

// array de arrays
var arr = arrObjs.map(function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key]
  })
})

console.log(arr)
