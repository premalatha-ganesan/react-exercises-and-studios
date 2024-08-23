import recipedata from "./recipe.json";
import style from "./styling.css";


function AuthorInfo() {
  const recipeAuthor = recipedata.map((recipe) => (
    <div key={recipe.author}>{recipe.author}
    </div>  
  ));
  const recipeAuthorImage = recipedata.map((recipe) => (
    <img width={200} height={200}
        key={recipe.author}
        src={recipe.authorImage}
        alt={recipe.author}
        className={style.authorImage}
        ></img>
   
  ));
  const recipeWebsite = recipedata.map((recipe) => (
    <a key={recipe.name} href={recipe.website}>{recipe.website}
    </a>

  ));
   return (
    <div>
       {recipeAuthor}<br></br>
       {recipeAuthorImage}
       {recipeWebsite}
    </div>
   
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 