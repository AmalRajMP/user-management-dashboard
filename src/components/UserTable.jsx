import UserRow from "./UserRow"

import "../styles/UserTable.css"

const UserTable = ({ users, setSelectedUser, setIsFormOpen }) => {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              setSelectedUser={setSelectedUser}
              setIsFormOpen={setIsFormOpen}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
