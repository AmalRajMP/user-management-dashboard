import "../styles/Pagination.css"

const Pagination = ({
  currentPage,
  totalPages,
  pageSize,
  totalUsers,
  startUser,
  endUser,
  onPageChange,
  onPageSizeChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  )

  return (
    <section className="pagination">
      <p className="pagination-info">
        Showing {startUser}-{endUser} of {totalUsers} users
      </p>

      <div className="pagination-controls">
        <div className="page-size">
          <label htmlFor="page-size">Rows per page:</label>

          <select
            id="page-size"
            value={pageSize}
            onChange={(e) => {
              onPageSizeChange(Number(e.target.value))
              onPageChange(1)
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <div className="page-buttons">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              type="button"
              className={page === currentPage ? "active-page" : ""}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pagination
