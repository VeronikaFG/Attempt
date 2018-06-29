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
