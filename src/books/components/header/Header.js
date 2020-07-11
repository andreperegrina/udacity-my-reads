import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Header.css';

const Header = (props) => {
   return (
      <div className='Header'>
         <input type="text" placeholder='Search books here...'/>
      </div>
   );
};

Header.propTypes = {};

export default Header;
