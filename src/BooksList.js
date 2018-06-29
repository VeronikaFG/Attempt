import React from "react"
import PropTypes from "prop-types"

function BooksList(props) {
  const { books, changeShelf } = props

  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}>
              </div>
              <div className="book-shelf-changer">
                <select
                  value={book.shelf}
                  onChange={e => (changeShelf(book, e.target.value))}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
            {/* the BooksAPI.search method DOES search by title or author. So, don't worry if you don't find a specific author or title. Every search is limited by search terms. https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md */}
              {book.authors && book.authors.join(", ")}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
