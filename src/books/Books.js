// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";

// Components
import BookList from './list/BookList'
import BookSearch from './search/BookSearch'

const Books = (props) => {
   return (
      <div style={{width:'100%',height:'100%'}}>
         <Route exact path='/' component={BookList}/>
         <Route exact path='/search' component={BookSearch}/>
      </div>
   );
};

Books.propTypes = {};

export default Books;
