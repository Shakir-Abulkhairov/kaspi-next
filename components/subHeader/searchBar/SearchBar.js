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
            <div className={style.dropdown}>
              <button className={style.dropbtn}>Dropdown</button>
              <div className={style.dropdown_content}>
                <a className={style.dropdown_link} href="#">Link 1</a>
                <a className={style.dropdown_link} href="#">Link 2</a>
                <a className={style.dropdown_link} href="#">Link 3</a>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default searchBar