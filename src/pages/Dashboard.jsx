import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import UserTable from "../components/UserTable"
import Pagination from "../components/Pagination"

const Dashboard = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <UserTable />
      <Pagination />
    </>
  )
}

export default Dashboard
