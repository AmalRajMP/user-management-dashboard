import { useEffect, useState } from "react"
import { FiX } from "react-icons/fi"

import "../styles/FilterPopup.css"

const FilterPopup = ({ filters, setFilters, onClose }) => {
  const [draftFilters, setDraftFilters] = useState(filters)

  useEffect(() => {
    setDraftFilters(filters)
  }, [filters])

  const { firstName, lastName, email, department } = draftFilters

  const onChangeFilter = (e) => {
    const { name, value } = e.target

    setDraftFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  const onApplyFilters = () => {
    setFilters(draftFilters)
    onClose()
  }

  const onClearFilters = () => {
    setDraftFilters({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    })
  }

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
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={onChangeFilter}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={onChangeFilter}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={onChangeFilter}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            type="text"
            value={department}
            onChange={onChangeFilter}
          />
        </div>

        <div className="filter-actions">
          <button onClick={onClearFilters}>Clear</button>

          <button onClick={onApplyFilters}>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default FilterPopup
