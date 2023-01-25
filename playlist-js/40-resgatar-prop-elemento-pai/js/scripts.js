const btn = document.querySelector("#get-parent-element")

console.log(btn)

btn.addEventListener("click", function () {
  const parent = this.parentNode

  console.log(parent)
  console.log(parent.classlist)
  console.log(parent.innerText)
})
