function initForm() {
    var formTemplate = document.getElementById("recipe-form-template").innerHTML;
    var template = Handlebars.compile(formTemplate);
    document.getElementsByTagName("main")[0].innerHTML = template({"submitAction": "createRecipe()"})
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
