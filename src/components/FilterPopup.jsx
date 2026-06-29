import { FiX } from "react-icons/fi"

import "../styles/FilterPopup.css"

const FilterPopup = ({ onClose }) => {
  return (
    <div className="filter-overlay">
      <div className="filter-popup">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close filter popup"
        >
          <FiX />
        </button>
        <h2>Filter Users</h2>

        <div className="filter-group">
          <label>First Name</label>
          <input type="text" />
        </div>

        <div className="filter-group">
          <label>Last Name</label>
          <input type="text" />
        </div>

        <div className="filter-group">
          <label>Email</label>
          <input type="text" />
        </div>

        <div className="filter-group">
          <label>Department</label>
          <input type="text" />
        </div>

        <div className="filter-actions">
          <button>Clear</button>
          <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default FilterPopup
