let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];
import recipe from "./recipe.json";

function RateARecipe({rating}) {
  return (
    <div>
      {rating >= 1 && rating <= 5 ? <GiveRating rating={rating} /> : null}
    </div>
  );
  
  function GiveRating({rating}) {
    console.log(stars[rating - 1]); // Logging the star string
    return (<h3>{stars[rating - 1]}</h3>);
  }
}


export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
