import recipedata from "./recipe.json"

function IngredientList() {
   return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipedata.map((recipe) => (
          <li key={recipe.id}>
            <ul>
              {recipedata.map((recipe) => (
                <li key = {recipe.id}>{recipe.ingredients}</li>
              ))}
              </ul></li>
        ))}
      </ul>
      
    </div>

   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 