// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

// Components
import Header from "../components/header/Header";
import Shelf from "../components/shelf/Shelf";

// Utils
import {search} from "../../utils/BooksAPI";

// Style
import './BookSearch.css'

class BookSearch extends Component {
   constructor(props) {
      super(props);
      const {q} = queryString.parse(this.props.location.search);
      this.state = {
         books: [],
         searchValue: q,
         isFetching: false
      };
   }


   componentDidMount() {
      const {q} = queryString.parse(this.props.location.search);
      if (q != null) {
         this.handleSearch(q);
      }
   }

   handleSearch = (value) => {
      this.setState({searchValue: value, isFetching: true});
      search(value).then((data = []) => {
         if (data.error != null) {
            data = [];
         }
         this.setState({books: data, isFetching: false})
      });
      this.props.history.push(`/search?q=${value}`);
   };

   handleBack = () => {
      this.props.history.push('/');
   };

   render() {
      const {myBooks, onMoveShelf} = this.props;
      const {books = [], searchValue, isFetching} = this.state;


      return (
         <div className='BookSearch'>
            <Header searchValue={searchValue} onSearch={this.handleSearch} onClickBack={this.handleBack}/>
            <Shelf books={books} onMoveShelf={onMoveShelf} customShelf={(book)=>{
               if(myBooks[book.id]){
                  return myBooks[book.id].shelf;
               }
               return book.shelf;
            }} isFetching={isFetching}/>
         </div>
      );
   }
}

BookSearch.propTypes = {
   history: PropTypes.any,
   onMoveShelf: PropTypes.func,
};

export default BookSearch;
