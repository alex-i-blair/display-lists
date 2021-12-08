export function renderCocktails(cocktailData) {
    
    const postEl = document.createElement('div');
    const cocktailTitleEl = document.createElement('p');
    const cocktailPhotoEl = document.createElement('img');
    const cocktailRecipeEl = document.createElement('p');

    postEl.classList.add('cocktail');

    cocktailTitleEl.textContent = cocktailData.name;
    cocktailPhotoEl.scr = cocktailData.image;
    cocktailRecipeEl.textContent = cocktailData.recipe;
    
    const ingredientArr = Object.keys(cocktailData.recipe);
    let recipePart = [];
    for (let ingredient of ingredientArr) {
        let ingredients = ingredient;
        let recipePartEl = document.createElement('p');
        let measure = cocktailData.recipe[ingredient];
        recipePartEl.textContent = `${ingredients}: ${measure}`;
        recipePart.push(recipePartEl);
    }
    // console.log(recipePart);
    return recipePart;
}