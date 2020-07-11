// Libraries
import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route,
   Link
} from "react-router-dom";

// CSS
import './App.css';

// Components
import Books from './books/Books';


function App() {
   return (
      <BrowserRouter>
         <Route path='/' component={Books}/>
      </BrowserRouter>
   );
}

export default App;
