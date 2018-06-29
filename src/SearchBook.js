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
