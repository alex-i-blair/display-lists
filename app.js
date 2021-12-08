// import functions and grab DOM elements
import cocktails from './cocktails-data.js';
import { renderCocktails } from './render-cocktails.js';
// import cocktails from './cocktails-data.js'
// import cocktails from './cocktails-data.js'
// import cocktails from './cocktails-data.js'

// initialize global state
const cocktailPostEl = document.querySelector('#cocktail-post');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let post of cocktails) {
    const cocktailsEl = renderCocktails(post);
    for (let p of cocktailsEl) {
        cocktailPostEl.append(p);
        
    }
}