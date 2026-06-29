import { useEffect, useMemo, useState } from "react"

import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import UserTable from "../components/UserTable"
import Pagination from "../components/Pagination"
import Loader from "../components/Loader"
import ErrorState from "../components/ErrorState"
import FilterPopup from "../components/FilterPopup"

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
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = searchTerm.toLowerCase()

      const matchesSearch =
        user.firstName.toLowerCase().includes(searchValue) ||
        user.lastName.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue)

      const matchesFilters =
        user.firstName
          .toLowerCase()
          .includes(filters.firstName.toLowerCase()) &&
        user.lastName.toLowerCase().includes(filters.lastName.toLowerCase()) &&
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.department.toLowerCase().includes(filters.department.toLowerCase())

      return matchesSearch && matchesFilters
    })
  }, [users, searchTerm, filters])

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

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize

    return sortedUsers.slice(startIndex, endIndex)
  }, [sortedUsers, currentPage, pageSize])

  const totalPages = Math.ceil(sortedUsers.length / pageSize)
  const totalUsers = sortedUsers.length

  const startUser = totalUsers === 0 ? 0 : (currentPage - 1) * pageSize + 1

  const endUser = Math.min(currentPage * pageSize, totalUsers)

  return (
    <main className="dashboard">
      <Header />

      <section className="dashboard-toolbar">
        <SearchBar value={searchTerm} onSearch={setSearchTerm} />

        <div className="toolbar-actions">
          <button
            type="button"
            className="filter-btn"
            onClick={() => setIsFilterOpen(true)}
          >
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
          <UserTable users={paginatedUsers} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            totalUsers={totalUsers}
            startUser={startUser}
            endUser={endUser}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
          />
        </>
      )}
      {isFilterOpen && (
        <FilterPopup
          filters={filters}
          setFilters={setFilters}
          onClose={() => setIsFilterOpen(false)}
        />
      )}
    </main>
  )
}

export default Dashboard
