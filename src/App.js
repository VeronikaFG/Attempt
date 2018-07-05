import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Library from "./Library";
import BookLibrary from "./BookLibrary";
import "./App.css";

// Initialize State with empty query and empty books array
class BooksApp extends React.Component {
  state = {
    query: "",
    userBooks: [],
    books: []
  };

  // Handling shelf change from old state to a new state
  categorizeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(oldState => ({
        // Filtering books in Library
        books: oldState.books.filter(b => {
          if (b.id === book.id) {
            // Categorize book in the shelf
            return (book.shelf = shelf);
          } else {
            return book;
          }
        })
      }));
    });
  };

  
