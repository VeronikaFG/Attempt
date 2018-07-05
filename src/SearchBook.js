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
