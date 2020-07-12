// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Style
import './BooksList.css'

// Components
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

// Utils
import {convertObjectToArray} from "../../utils";
import Shelves from "../components/shelves/Shelves";

class BookList extends Component {
   state = {
      activeCategory: ''
   };

   handleSearch = (value) => {
      this.props.history.push(`/search?q=${value}`);
   };

   handleChangeCategory = () => {

   };

   handleClickCategory = (value) => {
      this.setState({activeCategory: value === this.state.activeCategory ? '' : value})
   };


   render() {
      const {shelves, books, categories, onMoveShelf} = this.props;
      const {activeCategory} = this.state;
      const shelfList = convertObjectToArray(shelves);
      return (
         <div className='BooksList'>
            <Sidebar categories={categories} activeCategory={activeCategory}
                     onClickCategory={this.handleClickCategory}/>
            <div className='content'>
               <Header onChangeCategory={this.handleChangeCategory} onSearch={this.handleSearch}/>
               <Shelves books={books} shelves={shelfList} activeCategory={activeCategory}
                        onMoveShelf={onMoveShelf}/>
            </div>
         </div>
      );
   }
}

BookList.propTypes = {
   history: PropTypes.any,
   onMoveShelf: PropTypes.func,
   books: PropTypes.object,
   shelves: PropTypes.object,
   categories: PropTypes.array,
};

export default BookList;
