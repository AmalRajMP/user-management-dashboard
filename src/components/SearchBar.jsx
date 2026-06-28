import { FiSearch } from "react-icons/fi"

import "../styles/SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />

      <input
        type="search"
        className="search-input"
        placeholder="Search by name or email..."
      />
    </div>
  )
}

export default SearchBar
