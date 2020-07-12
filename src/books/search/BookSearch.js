// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

// Components
import Header from "../components/header/Header";
import BookItem from "../components/book-item/BookItem";

// Utils
import {search, update} from "../../utils/BooksAPI";

// Style
import './BookSearch.css'
import {updateShelvesChildren} from "../list/BookList.util";


class BookSearch extends Component {
   constructor(props) {
      super(props);
      const {q} = queryString.parse(this.props.location.search);
      this.state = {
         books: [],
         searchValue: q
      };
   }


   componentDidMount() {
      const {q} = queryString.parse(this.props.location.search);
      if (q != null) {
         this.handleSearch(q);
      }
   }

   handleSearch = (value) => {
      search(value).then((data = []) => {
         if (data.error != null) {
            data = [];
         }
         this.setState({books: data})
      });
      this.setState({searchValue: value})
   };
   handleMoveShelf = (book, shelf) => {
      update(book, shelf).then((data) => {
         const shelves = updateShelvesChildren(this.state.shelves, data);
         this.setState({shelves});
      })
   };
   handleBack = () => {
      this.props.history.push('/');
   };

   render() {
      const {myBooks} = this.props;
      const {books = [], searchValue} = this.state;
      return (
         <div className='BookSearch'>
            <Header searchValue={searchValue} onSearch={this.handleSearch} onClickBack={this.handleBack}/>
            <div className='books'>
               {books.map(book => (
                  <BookItem key={book.id} book={book} shelf={myBooks[book.id] ? myBooks[book.id].shelf : ''}
                            onMoveShelf={(shelf) => {
                               this.handleMoveShelf(book, shelf)
                            }}/>
               ))}
               {books.length <= 0 && <span className='placeholder-text'>No books were found here</span>}
            </div>
         </div>
      );
   }
}

BookSearch.propTypes = {
   history: PropTypes.any
};

export default BookSearch;
