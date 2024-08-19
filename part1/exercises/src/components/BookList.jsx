import classes from './BookList.module.css';
export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://www.portersquarebooks.com/sites/portersquarebooks.com/files/teaspoonearthandsea.jpg";
   let book2 = "https://www.portersquarebooks.com/sites/portersquarebooks.com/files/thegoldfinch.jpg";
   let book3 = "https://www.portersquarebooks.com/sites/portersquarebooks.com/files/smallfortune.jpg";

   return (
      <div className = {classes.bookBorder}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A teaspoon of Earth" />
         <img src={book2} alt="The Gold Finch" />
         <img src={book3} alt="A Small Fortune" />
      </div>      
   );
}