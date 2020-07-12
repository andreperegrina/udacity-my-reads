// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBack from "@material-ui/icons/ArrowBack";

// Style
import './Header.css';

// Utils

let debounce;

const Header = ({onSearch, onChangeCategory, onClickBack, searchValue}) => {
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
                        if (debounce) {
                           clearTimeout(debounce);
                        }
                        const value = event.target.value;
                        debounce = setTimeout(() => onSearch(value), 500);
                     }}
                  />
               </div>
               <div style={{flexGrow: 1}}/>
               <div style={{display: 'flex'}}>
                  <IconButton
                     edge="end"
                     aria-label="account of current user"
                     aria-haspopup="true"
                     color="inherit"
                     onClick={onChangeCategory}
                  >
                     <AccountCircle/>
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
};

Header.propTypes = {
   onSearch: PropTypes.func,
   onChangeCategory: PropTypes.func,
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
