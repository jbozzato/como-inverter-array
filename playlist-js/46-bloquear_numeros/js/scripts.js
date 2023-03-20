const inputName = document.querySelector("#name")

inputName.addEventListener("keypress", function (e) {
  const keycode = e.keycode ? e.keycode : e.wich

  console.log(keycode)

  // 47 ao 58 = São números
  if (keycode > 47 && keycode < 58) {
    e.preventDefault()
  }
})
