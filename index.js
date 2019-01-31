function initForm() {
    var formTemplate = document.getElementById("recipe-form-template").innerHTML
}

function handlebarsSetup() {

}
function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
  Handlebars
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
