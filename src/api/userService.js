import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com/users"

const getUsers = () => axios.get(API_URL)

const addUser = (user) => axios.post(API_URL, user)

const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user)

const deleteUser = (id) => axios.delete(`${API_URL}/${id}`)

export { getUsers, addUser, updateUser, deleteUser }
