import React, { Component } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import BooksList from "./BooksList"
import PropTypes from "prop-types"

class SearchBook extends Component {
  static propTypes = {
    categorizedBook: PropTypes.func.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    results: []
  }

  resetResults = () => (
    this.setState({ results: [] })
  )

  updateResearch = (query) => (
    BooksAPI.search(query)
      .then(results => {
        if (results && (!results.error)) {
          for (const book of results) {
            const selectedb = this.props.categorizedBook(book)
            book.shelf = selectedb ? selectedb.shelf : 'none'
          }
          this.setState({ results })
        }
      }
    )
  )

  render () {
    const { results } = this.state
    const { changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            onClick={this.resetResults}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateResearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList
            books={results}
            changeShelf={changeShelf}
          />
        </div>
      </div>
    )
  }
}
