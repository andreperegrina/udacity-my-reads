// Libraries
import React, {Component} from 'react';

// Style
import './BooksList.css'

// Components
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Shelf from "../components/shelf/Shelf";

// Utils
import {getAll, update} from "../../utils/BooksAPI";
import {extractCategoriesFromBooks, extractShelves, updateShelvesChildren} from "./BookList.util";
import {convertArrayToObject, convertObjectToArray} from "../../utils";

class BookList extends Component {
   state = {
      shelves: undefined,
      categories: [],
      activeCategory: ''
   };

   handleClickCategory = (value) => {
      this.setState({activeCategory: value === this.state.activeCategory ? '' : value})
   };

   handleMoveShelf = (book, shelf) => {
      update(book, shelf).then((data) => {
         const shelves = updateShelvesChildren(this.state.shelves, data);
         this.setState({shelves});
      })
   };

   componentDidMount() {
      getAll().then((data) => {
         // Extract and convert all necessary data before saving in the state
         const categories = extractCategoriesFromBooks(data);
         const shelves = extractShelves(data);
         const books = convertArrayToObject(data);

         this.setState({
            books,
            shelves,
            categories: Object.keys(categories)
         })
      })
   }

   render() {
      const {shelves, books, categories, activeCategory} = this.state;
      const shelfList = convertObjectToArray(shelves);
      return (
         <div className='BooksList'>
            <Sidebar categories={categories} activeCategory={activeCategory}
                     onClickCategory={this.handleClickCategory}/>
            <div className='content'>
               <Header/>
               <div className='list-books'>
                  {shelfList && shelfList.map((e) => (
                     <Shelf key={e.type} shelve={e} books={e.children.map(id => books[id])}
                            activeCategory={activeCategory}
                            onMoveShelf={this.handleMoveShelf}/>))}
               </div>
            </div>
         </div>
      );
   }
}

BookList.propTypes = {};

export default BookList;
