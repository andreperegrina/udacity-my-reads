// Libraries
import React, {Component} from 'react';
import {Route} from "react-router-dom";

// Components
import BookList from './list/BookList'
import BookSearch from './search/BookSearch'

// Utils
import {getAll, update} from "../utils/BooksAPI";
import {extractCategoriesFromBooks, extractShelves, updateShelvesChildren} from "./list/BookList.util";
import {convertArrayToObject} from "../utils";

class Books extends Component {
   state = {
      books: {},
      shelves: undefined,
      categories: [],
   };

   handleMoveShelf = (book, shelf) => {
      const bookId = book.id;
      update(book, shelf).then((data) => { // Data contains an object of shelves with the id's of the books that contains
         // Updates the array of children from the shelves
         const shelves = updateShelvesChildren(this.state.shelves, data);
         this.setState((prevState) => {
            const {books} = prevState;
            let bookChanged = books[bookId];
            if (bookChanged == null) {
               // If it is a new book, use the book object that was send from handleMoveShelf
               bookChanged = book;
            }
            const newBooks = {
               ...books,
               [bookId]: {
                  ...bookChanged,
                  shelf: shelf
               }
            };
            return {shelves, books: newBooks};
         });
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
      const {books, shelves, categories} = this.state;
      return (
         <div style={{width: '100%', height: '100%'}}>
            <Route exact path='/' render={(props) => (
               <BookList {...props} books={books} shelves={shelves} categories={categories}
                         onMoveShelf={this.handleMoveShelf}/>
            )}/>
            <Route exact path='/search' render={(props) => (
               <BookSearch {...props} myBooks={books} onMoveShelf={this.handleMoveShelf}/>
            )}/>
         </div>
      );
   }
}

Books.propTypes = {};

export default Books;
