var texto = "Ferrari"
var select = document.querySelector("#marcas")

for (var i = 0; i < select.options.length; i++) {
  //
  // console.log(select.obtions[i].text)

  if (select.options[i].text === texto) {
    select.selectedIndex = i
    break
  }
}
