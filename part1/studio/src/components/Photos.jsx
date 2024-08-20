import React from 'react';
import styles from './Description.module.css';


export default function RecipePhoto(){
    return (
        <img src="https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-Stuffed-pork-1305.jpg" 
        alt="Pork Loin" className = {styles.imageUpdates} />
    )
}