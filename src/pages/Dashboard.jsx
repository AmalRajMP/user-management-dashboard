import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import UserTable from "../components/UserTable"
import Pagination from "../components/Pagination"
import Loader from "../components/Loader"
import ErrorState from "../components/ErrorState"

import useUsers from "../hooks/useUsers"

import { FiFilter } from "react-icons/fi"

import "../styles/Dashboard.css"

const Dashboard = () => {
  const { users, loading, error } = useUsers()

  return (
    <main className="dashboard">
      <Header />

      <section className="dashboard-toolbar">
        <SearchBar />

        <div className="toolbar-actions">
          <button type="button" className="filter-btn">
            <FiFilter className="filter-icon" />
            <span>Filter</span>
          </button>

          <select className="sort-select">
            <option value="">Sort By</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="email-asc">Email (A-Z)</option>
            <option value="email-desc">Email (Z-A)</option>
            <option value="department-asc">Department (A-Z)</option>
            <option value="department-desc">Department (Z-A)</option>
          </select>
        </div>
      </section>

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorState />
      ) : (
        <>
          <UserTable users={users} />

          <Pagination />
        </>
      )}
    </main>
  )
}

export default Dashboard
