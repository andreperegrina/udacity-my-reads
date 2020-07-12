import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Sidebar.css';

const Sidebar = ({categories, onClickCategory, activeCategory}) => {
   return (
      <div className='Sidebar'>
         <div className='title'>
            <h1>MY READS</h1>
         </div>
         <div className='book-category'>
            <h2>Categories</h2>
            <ul>
               <li className={activeCategory === '' ? 'active' : ''}
                   onClick={() => onClickCategory('')}>
                  All
               </li>
               {categories.map((e) => <li className={activeCategory === e ? 'active' : ''}
                                          onClick={() => onClickCategory(e)} key={e}>{e}</li>)}
            </ul>
         </div>
      </div>
   );
};

Sidebar.propTypes = {
   categories: PropTypes.array,
   onClickCategory: PropTypes.func,
   activeCategory: PropTypes.string
}
;

export default Sidebar;
