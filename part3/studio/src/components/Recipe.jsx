//import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.gordonramsay.com/gr/recipes/";
   let authorPhoto = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg";
   let authorName = "Gordon Ramsay";

   return (
      <div>
         <img src={authorPhoto} width = "150 px" height = "300 px" alt = "Gordan Ramsay" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Pork Loin", "Cheese", "Olive oil" , "Salt" , "Pepper"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-Stuffed-pork-1305.jpg" 
      alt="Pork Loin" width="300 px" height = "200 px" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
