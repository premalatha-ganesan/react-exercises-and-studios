

//import React from 'react';


export default function HobbyLinks() {
    let hobbyTitle = "My Hobbies"
    let hobbyLinks = ["https://www.gardeningknowhow.com/", "https://www.jigsawplanet.com/"];
 
 
    return (
        <div>
            <h3> {hobbyTitle}</h3>
            <ul style={{listStyleType: 'none'}}>
                <li><a href = {hobbyLinks[0]}> Gardening </a></li>
                <li><a href = {hobbyLinks[1]}> Puzzles </a></li>
            </ul>
           
           
        </div>
 )
 }
 