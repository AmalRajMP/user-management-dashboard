import { FiSearch } from "react-icons/fi"

import "../styles/SearchBar.css"

const SearchBar = ({ value, onSearch }) => {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />

      <input
        type="search"
        value={value}
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by name or email..."
      />
    </div>
  )
}

export default SearchBar
