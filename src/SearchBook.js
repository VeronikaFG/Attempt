import React from "react";
import PropTypes from "prop-types";

class SearchBook extends React.Component {
  render() {

    const { books, query, update, userBooks } = this.props;

    let visualizeBooks = [];

    // Find and show books in the query if books exist
    if (userBooks.length > 0 && query !== "") {

      userBooks.forEach(selectedBook => {
        const comparedBooks = books.filter(book => book.id === selectedBook.id);
        if (comparedBooks.length > 0) {
          visualizeBooks.push(...comparedBooks);
        } else {
          visualizeBooks.push(selectedBook);
        }
      });
    }

    return (
      <ol className="books-grid">
        {visualizeBooks.map(Book => (
          <li key={Book.id}>
            <div className="book">
              <div className="book-top">
                {/* Find images-style-title books */}
                {Book.imageLinks && (
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${Book.imageLinks.thumbnail})`
                  }}>
                </div>
                )}
                {Book.imageLinks === undefined && (
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `http://via.placeholder.com/128x193?text=No%20Cover`
                  }}
                >
                </div>
                )}
              
                <div className="book-shelf-changer">
                  {/* If a book is not categorized, set category "none" */}
                  <select
                    value={Book.shelf || "none"}
                    id={Book.id}
                    onChange={event => update(Book, event.target.value)}
                  >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{Book.title}</div>
              {/*  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.*/}
              {Book.authors &&
                Book.authors.map(Bookauthor => (<div className="book-authors"
                  key={Bookauthor}></div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

SearchBook.propTypes = {
  userBooks: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  books: PropTypes.array,
  update: PropTypes.func
};

export default SearchBook;
