Handlebars.registerHelper("displayIngredient",
    function() {

    })

function editRecipe() {

}

Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("partial-template").innerHTML)

function renderMain() {
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    var recipe = createRecipe();
    var html = template(recipe)

    document.getElementsByTagName("main")[0].innerHTML += html;
}



function createRecipe() {

    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
    var recipeName = document.getElementById("recipe-name").value;
    var recipeDescription = document.getElementById("recipe-description").value;

    var recipe = {
        description: recipeDescription,
        ingredients: [
            {quantity: "1 cup", name: "chicken"},
            {quantity: "3 nanoliters", name: "stock"}
        ]
    }

    return recipe
    document.getElementsByTagName("main")[0].innerHTML += result;
}





function init() {
  //put any page initialization/handlebars initialization here
  Handlebars
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
