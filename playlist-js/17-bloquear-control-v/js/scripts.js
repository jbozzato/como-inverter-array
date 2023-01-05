const name = document.querySelector("#name")

name.addEventLister("paste", function (e) {
  e.preventDefault()
})
