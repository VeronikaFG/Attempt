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

  componentDidMount() {
  // Get all books API
  BooksAPI.getAll().then(data => {
    this.setState({ books: data });
  });
}

// Find and update Books in state
findBooks = query => {
  this.setState({ query: query });

  if (query.length > 0) {
    BooksAPI.search(query).then(data => {
      this.setState({
        userBooks: data
      });
    });
  }
};

render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <BookLibrary
              state={this.state}
              update={this.categorizeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Library
              state={this.state}
              update={this.categorizeShelf}
              search={this.findBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
