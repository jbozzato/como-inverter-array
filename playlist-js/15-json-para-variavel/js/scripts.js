var kson = '{"nome": "Matheus", "idade": 30, "profissão": "progamador"}'

console.log(json)
console.log(typeof json)

// JSON
var obj = JSON.parse(json)

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)
console.log(obj["idade"])

// obj to JSON
var jsonFromObj = JSON.stringify(obj)

console.log(jsonFromObj)
