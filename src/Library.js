import React from "react";
import { Link } from "react-router-dom";
import SearchBook from "./SearchBook";
import PropTypes from "prop-types";

class Library extends React.Component {
  // Reset Initial Query
  resetQuery() {
    this.setState({query: ""});
  }

  render() {
    // Destructure props object
    const { state, update, search } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"
            onClick={this.resetQuery}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/* Search by title or author */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={state.query}
              onChange={event => search(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {/*Search books selected by user */}
          <SearchBook
            books={state.books}
            userBooks={state.userBooks}
            query={state.query}
            update={update}
          />
        </div>
      </div>
    );
  }
}

Library.propTypes = {
  state: PropTypes.object.isRequired,
  update: PropTypes.func,
  search: PropTypes.func
};

export default Library;
