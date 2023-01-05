// selecionar elemento
var box = document.getElementById("box")

console.log(box)

// verificando coordenadas e também as posições
var coordenadas = box.getBoundingClientRect()

console.log(coordenadas)

if (coordenadas.x === 25) {
  alert("chegou no 25!")
}
