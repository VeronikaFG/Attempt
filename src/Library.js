import React from "react";
import { Link } from "react-router-dom";
import SearchBook from "./SearchBook";
import PropTypes from "prop-types";

class Library extends React.Component {
  // Reset Initial Query
  resetQuery() {
    this.setState({query: ""});
  }
