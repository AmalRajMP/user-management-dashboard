import { FiPlus } from "react-icons/fi"

import "../styles/Header.css"

const Header = ({ onAddUser }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">User Management Dashboard</h1>

        <p className="header-description">
          Streamline user administration with a clean, intuitive dashboard
          designed for efficient management.
        </p>
      </div>

      <button type="button" className="add-user-btn" onClick={onAddUser}>
        <FiPlus className="btn-icon" />
        <span>Add User</span>
      </button>
    </header>
  )
}

export default Header
