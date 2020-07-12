// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBack from "@material-ui/icons/ArrowBack";

// Style
import './Header.css';

// Utils

// This variable is for creating a debounce for when the user start to search
let debounce;

const Header = ({onSearch, onClickBack, searchValue}) => {
   return (
      <div className='Header'>
         <AppBar position="static">
            <Toolbar>
               <div style={{display: 'flex', marginRight: '1.5rem'}}>
                  {onClickBack && <IconButton
                     edge="end"
                     aria-label="account of current user"
                     aria-haspopup="true"
                     color="inherit"
                     onClick={onClickBack}
                  >
                     <ArrowBack/>
                  </IconButton>}
               </div>
               <div className='search-container'>
                  <div className='search-icon'>
                     <SearchIcon/>
                  </div>
                  <InputBase
                     defaultValue={searchValue}
                     placeholder="Search…"
                     inputProps={{'aria-label': 'search'}}
                     onChange={(event) => {
                        // Using debounce to add a delay before the search start
                        if (debounce) {
                           clearTimeout(debounce);
                        }
                        const value = event.target.value;
                        debounce = setTimeout(() => onSearch(value), 500);
                     }}
                  />
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
};

Header.propTypes = {
   onSearch: PropTypes.func,
   onClickBack: PropTypes.func,
   searchValue: PropTypes.string
};
Header.defaultProps = {
   onSearch: () => {
   },
   onChangeCategory: () => {
   },
};

export default Header;
