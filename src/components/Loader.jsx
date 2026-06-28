import { ThreeDots } from "react-loader-spinner"

import "../styles/Loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots height="70" width="70" color="#2563eb" visible={true} />

      <p className="loader-text">Loading users...</p>
    </div>
  )
}

export default Loader
