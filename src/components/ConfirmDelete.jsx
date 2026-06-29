import { deleteUser } from "../api/userService"

import "../styles/ConfirmDelete.css"

const ConfirmDelete = ({ selectedUser, setUsers, onClose }) => {
  const onDeleteUser = async () => {
    try {
      await deleteUser(selectedUser.id)

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== selectedUser.id),
      )

      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="confirm-overlay">
      <div className="confirm-card">
        <h2>Delete User</h2>

        <p>
          Are you sure you want to delete{" "}
          <strong>
            {selectedUser.firstName} {selectedUser.lastName}
          </strong>
          ?
        </p>

        <div className="confirm-actions">
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button type="button" className="delete-btn" onClick={onDeleteUser}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDelete
