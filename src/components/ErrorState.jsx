import { FiAlertTriangle } from "react-icons/fi"

import "../styles/ErrorState.css"

const ErrorState = () => {
  return (
    <div className="error-container">
      <div className="error-card">
        <FiAlertTriangle className="error-icon" />

        <h2>Something went wrong</h2>

        <p>
          Unable to load users.
          <br />
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  )
}

export default ErrorState
