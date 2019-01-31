function initForm() {
    var formTemplate = document.getElementById("recipe-form-template").innerHTML
    var template = Handlebars.compile(formTemplate);
    document.getElementsByTagName("main")[0].innerHTML = template({"submitAction": "createRecipe()"})
}

function createRecipe() {
    var recipe = getRecipeVals()
    var recipeTemplate = document.getElementById("recipe-template").innerHTML
    var template = Handlebars.compile(recipeTemplate)
    document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
    var recipe = getRecipeVals()
    var recipeTemplate = document.getElementById("recipe-template").innerHTML
    var template = Handlebars.compile(recipeTemplate)
    document.getElementById("main").innerHTML = template(recipe)
}

function handlebarsSetup() {
    Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML)
    Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
    Handlebars.registerHelper("displayIngredient", function(ingredient) {
        return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>")
    })
}

function getRecipeVals() {
    var ingredientsNodes = document.getElementsByName("ingredients");
    var ingredients = []
    for (let i = 0; i < ingredientsNodes.length; i++) {
        if (ingredientsNodes[i].value !== "") {
            ingredients.push(ingredientsNodes[i].value)
        }
    }
    var name = document.getElementById("name").value
    var description = document.getElementById("description").value
    var recipe = {name, ingredients, description}
    return recipe
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
