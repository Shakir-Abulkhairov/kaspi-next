import style from './Pagination.module.css';
function Pagination({ currentPage, productPerPage, totalCount, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / productPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul className={style.pagination}>
      {
        pageNumbers.map((num) => (
          <li key={num}  >
            <a href='#' className={`${style.page__item} ${currentPage == num ? style.active : ''}`} onClick={() => paginate(num)}>{num}</a>
          </li>
        ))
      }
    </ul >
  )
}

export default Pagination