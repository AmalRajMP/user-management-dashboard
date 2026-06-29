import { FiEdit2, FiTrash2 } from "react-icons/fi"

import "../styles/UserRow.css"

const UserRow = ({ user, setSelectedUser, setIsFormOpen, setIsDeleteOpen }) => {
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
        <button
          type="button"
          onClick={() => {
            setSelectedUser(user)
            setIsDeleteOpen(true)
          }}
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  )
}

export default UserRow
