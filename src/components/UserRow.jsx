const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.department}</td>
      <td className="actions-cell"></td>
    </tr>
  )
}

export default UserRow
