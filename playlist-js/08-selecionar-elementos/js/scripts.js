//selecionar por ID
// --->
var tituloSecao = document.getElementById("titulo-secao")

console.log(tituloSecao)

// Selecionar o elemento por CLASSE
// --->
var paragrafosDescrição = document.getElementsByClassName("description")

console.log(paragrafosDescrição)

var paragrafosDescriçãoB = document.getElementsByClassName("description-b")

console.log(paragrafosDescriçãoB)

// Selecionar elemento por TAG
// --->
var paragrafos = document.getElementsByTagName("p")

console.log(paragrafos)

// Seletores por CSS - Query Selector
// --->
var itensLista = document.querySelectorAll("#lista .item")

console.log(itensLista)

var titulo = document.querySelector("#titulo-secao")

console.log(titulo)

// Seletores por CSS - Query Selector
// --->
var itensListaB = document.querySelector("#lista .item")

console.log(itensListaB)
