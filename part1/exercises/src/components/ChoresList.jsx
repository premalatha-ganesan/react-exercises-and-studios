import React from 'react';
import classes from './ChoresList.module.css';


export default function ChoresList () {


  return (
     <div>
        <h2 className = {classes.choresHeading}> Today's chores</h2>
        <ul>
           <li className = {classes.choresText}> Laundry </li>
           <li className = {classes.choresText}> Do the dishes</li>
        </ul>
     </div>
  )
}
