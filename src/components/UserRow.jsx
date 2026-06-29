import { FiEdit2 } from "react-icons/fi"

import "../styles/UserRow.css"

const UserRow = ({ user, setSelectedUser, setIsFormOpen }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.department}</td>
      <td className="actions-cell">
        <button
          type="button"
          onClick={() => {
            setSelectedUser(user)
            setIsFormOpen(true)
          }}
        >
          <FiEdit2 />
        </button>
      </td>
    </tr>
  )
}

export default UserRow
