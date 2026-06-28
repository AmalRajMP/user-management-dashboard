import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">User Management Dashboard</h1>

        <p className="header-description">
          Streamline user administration with a clean, intuitive dashboard
          designed for efficient management.
        </p>
      </div>

      <button type="button" className="add-user-btn">
        Add User
      </button>
    </header>
  )
}

export default Header
