import { useEffect, useState } from "react"

import { addUser, updateUser } from "../api/userService"

import "../styles/UserForm.css"

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
}

const UserForm = ({ users, selectedUser, setUsers, onClose }) => {
  const [formData, setFormData] = useState(initialFormData)

  const isEditMode = Boolean(selectedUser)

  useEffect(() => {
    if (isEditMode) {
      setFormData(selectedUser)
    } else {
      setFormData(initialFormData)
    }
  }, [selectedUser, isEditMode])

  const onChangeField = (event) => {
    const { name, value } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const onSubmitForm = async (event) => {
    event.preventDefault()

    try {
      if (isEditMode) {
        if (selectedUser.id <= 10) {
          await updateUser(selectedUser.id, formData)
        }

        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === selectedUser.id ? { ...user, ...formData } : user,
          ),
        )
      } else {
        await addUser(formData)

        const nextId = Math.max(...users.map((user) => user.id), 0) + 1

        const newUser = {
          id: nextId,
          ...formData,
        }

        setUsers((prevUsers) => [newUser, ...prevUsers])
      }

      onClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form-overlay">
      <div className="form-card">
        <h2>{isEditMode ? "Edit User" : "Add User"}</h2>

        <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={onChangeField}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={onChangeField}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onChangeField}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>

            <input
              id="department"
              name="department"
              type="text"
              value={formData.department}
              onChange={onChangeField}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="submit-btn">
              {isEditMode ? "Update User" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm
