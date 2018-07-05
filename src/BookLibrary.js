import React from "react";
import { Link } from "react-router-dom";
import SortBook from "./SortBook";
import PropTypes from "prop-types";

class BookLibrary extends React.Component {
  render() {

    const { state, update } = this.props;

    // Categorize books
    let currentShelf = state.books.filter(book => book.shelf === "currentlyReading");
    let WantReadShelf = state.books.filter(book => book.shelf === "wantToRead");
    let ReadShelf = state.books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {currentShelf.length > 0 && (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <SortBook
                    books={currentShelf}
                    update={update}
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {WantReadShelf.length > 0 && (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <SortBook
                    books={WantReadShelf}
                    update={update}
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {ReadShelf.length > 0 && (
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <SortBook
                    books={ReadShelf}
                    update={update}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <Link to="/search" className="open-search open-link">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

BookLibrary.propTypes = {
  state: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  update: PropTypes.func
};

export default BookLibrary;
