import { useMemo, useState } from "react"

import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import UserTable from "../components/UserTable"
import Pagination from "../components/Pagination"
import Loader from "../components/Loader"
import ErrorState from "../components/ErrorState"

import useUsers from "../hooks/useUsers"

import { FiFilter } from "react-icons/fi"

import "../styles/Dashboard.css"

const fieldMap = {
  name: "firstName",
  email: "email",
  department: "department",
}

const Dashboard = () => {
  const { users, loading, error } = useUsers()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("")

  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query),
    )
  }, [users, searchTerm])

  const sortedUsers = useMemo(() => {
    if (!sortBy) return [...filteredUsers]

    const [field, direction] = sortBy.split("-")

    const sortField = fieldMap[field]

    const sorted = [...filteredUsers]

    sorted.sort((a, b) => {
      const valueA = a[sortField].toLowerCase()
      const valueB = b[sortField].toLowerCase()

      return direction === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA)
    })

    return sorted
  }, [filteredUsers, sortBy])

  return (
    <main className="dashboard">
      <Header />

      <section className="dashboard-toolbar">
        <SearchBar value={searchTerm} onSearch={setSearchTerm} />

        <div className="toolbar-actions">
          <button type="button" className="filter-btn">
            <FiFilter className="filter-icon" />
            <span>Filter</span>
          </button>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
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
          <UserTable users={sortedUsers} />

          <Pagination />
        </>
      )}
    </main>
  )
}

export default Dashboard
