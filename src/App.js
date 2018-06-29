import React from "react"
import * as BooksAPI from "./BooksAPI"
import { Route, Link } from "react-router-dom"
import BookLibrary from "./BookLibrary"
import SearchBook from "./SearchBook"
import "./App.css"

class BooksApp extends React.Component {
  state = {
    books: [],
  }

componentDidMount = () => this.getBooks()

// Get all library BooksAPI
getBooks = () => {
  BooksAPI.getAll()
  .then((books) => {
    this.setState(() => ({
      books
    }))
  })
}

//Select and categorize Books
categorizedBook = (book) => {
  for (const selectedb of this.state.books) {
    if (selectedb.id === book.id)
    return selectedb
  }
}

// Update categories of Books
changeCategory = (book, newShelf) => {
  BooksAPI.update(book, newShelf)
    .then((response) => {
      book.shelf = newShelf
      this.getBooks()
    })
}

selectBook = (book) => (
  this.setState(
    state => ({ books: state.books.concat([ book ]) })
  )
)

removeBook = (book) => (
  this.setState(
    state => ({ books: state.books.filter(selectedb => selectedb.id !== book.id) })
  )
)

  render() {
    return(
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBook
            categorizedBook={this.categorizedBook}
            changeShelf={this.changeCategory}
          />
        )}>
        </Route>

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <BookLibrary
                books={this.state.books}
                changeShelf={this.changeCategory}
              />
            </div>

            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
