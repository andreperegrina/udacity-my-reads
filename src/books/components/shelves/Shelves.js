import React from 'react';
import PropTypes from 'prop-types';
import Shelf from "../shelf/Shelf";

const Shelves = ({shelves, activeCategory, books, onMoveShelf}) => {
   return (
      <div className='list-books'>
         {shelves && shelves.map((e) => (
            <Shelf key={e.type} shelve={e} books={e.children.map(id => books[id])}
                   activeCategory={activeCategory}
                   onMoveShelf={onMoveShelf}/>))}
      </div>
   );
};

Shelves.propTypes = {
   shelves: PropTypes.array,
   books: PropTypes.object,
   activeCategory: PropTypes.string,
   onMoveShelf: PropTypes.func,
};

export default Shelves;
