import React from "react"
import PropTypes from "prop-types"
import BooksList from "./BooksList"

const allCategories = ["currentlyReading", "wantToRead", "read"]

function BookLibrary(props) {
  const { books, changeShelf } = props
  
