# User Management Dashboard

A responsive user management dashboard built with React and Vite. The application supports CRUD operations along with search, filtering, sorting, and pagination to provide a clean and intuitive user management experience.

## Live Demo

🔗 https://user-management-dashboard-gilt-theta.vercel.app/

## GitHub Repository

🔗 https://github.com/AmalRajMP/user-management-dashboard

## Features

- Fetch user data from the JSONPlaceholder API
- Add new users
- Edit existing users
- Delete users with a confirmation dialog
- Search users by first name, last name, and email
- Filter users by first name, last name, email, and department
- Sort users by name, email, and department
- Client-side pagination with configurable page size
- Responsive layout for desktop and mobile
- Loading and error state handling

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Axios
- React Icons
- CSS

## Project Structure

```
src
├── api
│   └── userService.js
├── components
├── hooks
│   └── useUsers.js
├── pages
│   └── Dashboard.jsx
├── styles
├── App.jsx
└── main.jsx
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/AmalRajMP/user-management-dashboard.git
```

### Navigate to the project

```bash
cd user-management-dashboard
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## API

The project uses the **JSONPlaceholder** API for user data.

```
https://jsonplaceholder.typicode.com/users
```

> **Note:** JSONPlaceholder is a mock API. Newly added users are maintained in the application's local state after a successful API request and are not permanently stored on the server.

## Future Improvements

- Custom form validation messages
- Toast notifications for CRUD operations
- Backend integration with persistent storage
- Additional filter options

## Author

**Amal Raj**

GitHub: https://github.com/AmalRajMP
