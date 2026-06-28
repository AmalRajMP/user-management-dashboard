import { useState, useEffect } from "react"

import { getUsers } from "../api/userService"

const useUsers = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const fetchedUsers = await getUsers()

        const mappedUsers = fetchedUsers?.data.map((user) => {
          const names = user.name.split(" ")
          return {
            id: user.id,
            firstName: names[0] || "",
            lastName: names.slice(1).join(" ") || "",
            email: user.email,
            department: "IT",
          }
        })

        setUsers(mappedUsers)
      } catch (err) {
        setError(err)
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])
  return { users, isLoading, error }
}

export default useUsers
