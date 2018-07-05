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
