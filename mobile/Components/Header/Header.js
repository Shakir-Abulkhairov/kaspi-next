import Modal from '../Modal/Modal';
import style from './Header.module.css';
const Header = ({ toggleVisibleCities }) => {

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.search}>
          <span className={style.icon_location} onClick={toggleVisibleCities} >
            <img src='/image/mobile/location.png' />
          </span>
          <div className={`${style.search_input} ${style.input}`}>Поиск в Магазине</div>
          {/* {
            showCities && <Modal />
          } */}
        </div>
      </div>
    </div>
  )
}
export default Header;