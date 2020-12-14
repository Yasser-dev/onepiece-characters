import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-input.styles.css";
export const SearchInput = ({ placeholder, handleChange }) => (
  <div className="search">
    <input
      type="text"
      className="searchTerm"
      placeholder={placeholder}
      onChange={handleChange}
    />
    <button type="button" className="searchButton">
      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    </button>
  </div>
);
