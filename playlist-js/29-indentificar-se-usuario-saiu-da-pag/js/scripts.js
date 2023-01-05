// window.addEventListener("blur", function () {
//  console.log("Mudou de página")
// })

var hidden, visibilityChange
if (typeof document.hidden !== "underfined") {
  hidden = "hidden"
  visibilityChange = "visibilitychange"
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden"
  visibilityChange = "mozvisibilitychange"
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden"
  visibilityChange = "msvisibilitychange"
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden"
  visibilityChange = "webkitvisibilitychange"
}

document.addEventListener(visibilityChange, action, false)

function action() {
  console.log("mudou de pagina v2!")
}
