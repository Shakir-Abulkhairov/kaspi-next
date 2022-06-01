import style from './searchBar.module.css';


function searchBar() {
  return (
    <div className={style.wrapper}>
      <div className='container'>
        <form className={style.form}>
          <div className={style.search_bar_wrapper}>
            <input className={style.search_bar_input}
              type='seacrch'
              placeholder='Поиск товара'
              maxLength='256' />
            <button className={style.search_bar_button}>
              <span className={style.search_bar_icon}>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default searchBar