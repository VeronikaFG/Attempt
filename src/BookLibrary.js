import React from "react"
import PropTypes from "prop-types"
import BooksList from "./BooksList"

const allCategories = ["currentlyReading", "wantToRead", "read"]

function BookLibrary(props) {
  const { books, changeShelf } = props

  return (
    <div>
      {allCategories.map(shelf => (
        <div key={shelf} className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <BooksList
              books={books.filter(
                book => book.shelf === shelf
              )}
              changeShelf={changeShelf}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
