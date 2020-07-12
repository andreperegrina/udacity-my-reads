// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from "../book-item/BookItem";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

// Style
import './Shelf.css';

const Shelf = ({shelve, books = [], activeCategory, onMoveShelf, isFetching = false, customShelf}) => {
   if (activeCategory != null && activeCategory !== '') {
      books = books.filter((e) => e.categories && e.categories.includes(activeCategory));
   }
   const isBookShelfEmpty = (!isFetching && books.length <= 0);
   return (
      <div className='Shelf'>
         {shelve && <h2>{shelve.name}</h2>}
         <div className={`books ${(isFetching || isBookShelfEmpty) ? 'center' : ''}`}>
            {isFetching && <div className='loading'>
               <CircularProgress/>
               <div className='loading-text'>Loading...</div>
            </div>
            }
            {books.map(book => (
               <BookItem key={book.id} book={book}
                         shelf={customShelf(book)}
                         onMoveShelf={(shelf) => {
                            if (onMoveShelf) {
                               onMoveShelf(book, shelf)
                            }
                         }}/>
            ))}
            {isBookShelfEmpty && <span className='placeholder-text'>No books were found here.</span>}
         </div>
      </div>
   );
};

Shelf.propTypes = {
   shelve: PropTypes.object,
   books: PropTypes.array,
   activeCategory: PropTypes.string,
   isFetching: PropTypes.bool,
   onMoveShelf: PropTypes.func,
   customShelf: PropTypes.func
};
Shelf.defaultProps = {
   customShelf: (book) => book.shelf
};

export default Shelf;
