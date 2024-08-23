import recipedata from "./recipe.json";
import styles from "./styling.css";


function RecipeImage() {
   return (
    <div  >
      {recipedata.map((recipe) => (
        <img width={200} height={200}
        key={recipe.name}
        src={recipe.recipeImage}
        alt={recipe.name}
        className={styles.RecipeImage}
        ></img>
      )
    )}
      
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 