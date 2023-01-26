var pessoas = {
  01: "João",
  02: "Matheus",
  03: "Pedro",
  04: "Maria",
  05: "Roberta",
}

// forEach
Object.keys(pessoas).forEach(function (item) {
  console.log(item + " - " + pessoas[item])
})

// for in
for (var item in pessoas) {
  console.log + " - " + pessoas[item]
}

// Object.entries
for (var [key, value] of Object.entries(pessoas)) {
  console.log(key + " - " + value)
}
