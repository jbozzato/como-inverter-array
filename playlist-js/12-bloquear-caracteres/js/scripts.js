const brandinput = document.querySelector("#brand")

brandinput.addEventListener("keypress", function (e) {
  if (!checkchar(e)) {
    e.preventDefault()
  }
})

function checkchar(e) {
  const char = String.fromCharCode(e.keycode)

  console.log(e.keycode)
  console.log(char)

  const pattern = "[a-zA=Z0-09]"

  if (char.match(pattern)) {
    console.log(char)
    return true
  }
}
