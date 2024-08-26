import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
         {
           label: "Hearty Meat Lovers' Dishes",
           val: "hearty_meat_lovers_dishes"
         },
         {
           label: "Elegant Entertaining Meals",
           val : "elegant_entertaining_meals"
         },
         {
           label: "Healthy & Lean Proteins",
           val: "healthy_lean_proteins"
         }
   ];
   const [boardName, setBoardName] = useState("no boards yet!");

   console.log("BoardAssignment component rendering");

   const handleChange = (event) => { 
      console.log(event.target.value);
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      
      <select value={boardName} onChange={handleChange }>
      <option value="" disabled>
          Select a board
        </option>
         {boards.map((board) => { return (
            <option key = {board.label} value={board.val}>{board.label}</option>
         )       
         })}
      </select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}
