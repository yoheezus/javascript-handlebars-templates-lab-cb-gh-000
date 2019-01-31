

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("partial-template").innerHTML)
  Handlebars
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
