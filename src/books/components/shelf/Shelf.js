// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from "../book-item/BookItem";

// Style
import './Shelf.css';

const Shelf = ({shelve, books = [], activeCategory, onMoveShelf}) => {
   if (activeCategory != null && activeCategory !== '') {
      books = books.filter((e) => e.categories && e.categories.includes(activeCategory));
   }
   return (
      <div className='Shelf'>
         <h2>{shelve.name}</h2>
         <div className='books'>
            {books.map(book => (
               <BookItem key={book.id} book={book}
                         shelf={book.shelf}
                         onMoveShelf={(shelf) => {
                            if (onMoveShelf) {
                               onMoveShelf(book, shelf)
                            }
                         }}/>
            ))}
            {books.length <= 0 && <span className='placeholder-text'>No books were found here</span>}
         </div>
      </div>
   );
};

Shelf.propTypes = {
   onMoveShelf: PropTypes.func
};

export default Shelf;
