import saveButton from "./SaveButton.jsx";
import clickedButton from "./ClickedButton.jsx";
import SaveButton from "./SaveButton.jsx";
import ClickedButton from "./ClickedButton.jsx";

function Button(props) {
  const saveButton = props.saveButton;

   return (
    saveButton ? <SaveButton /> : <ClickedButton />
   )
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 