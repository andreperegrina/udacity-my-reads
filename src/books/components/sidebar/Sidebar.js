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
               {categories.map((e) => <li className={activeCategory === e ? 'active' : ''}
                                          onClick={() => onClickCategory(e)} key={e}>{e}</li>)}
            </ul>
         </div>
      </div>
   );
};

Sidebar.propTypes = {};

export default Sidebar;
