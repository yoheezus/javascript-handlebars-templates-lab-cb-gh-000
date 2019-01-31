Handlebars.registerHelper("displayIngredient",
    function() {

    })

function createRecipe() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
    var recipeName = document.getElementById("recipe-name").value;
    var recipeDescription = document.getElementById("recipe-description").value;

    var formattedRecipe = {
        recipeName: recipeName
    }
    var result = template(formattedRecipe);
    document.getElementsByTagName("main")[0].innerHTML += result;
}





function init() {
  //put any page initialization/handlebars initialization here
  Handlebars
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
