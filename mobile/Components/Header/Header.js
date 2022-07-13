import Modal from '../Modal/Modal';
import style from './Header.module.css';
const Header = ({ toggleVisibleCities, styleIcon, styleTop, textTop, changeIcon }) => {

  const switchClick = () => {
    switch (changeIcon) {
      case 'location':
        return <span className={styleIcon} onClick={toggleVisibleCities} ></span>
      case 'back':
        return <a href='/'><span className={styleIcon} ></span></a>
      default:
        return console.error('возможно вы неправильно передали параметры!');
    }
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.search}>
          {
            switchClick()
          }
          <div className={`${style.top_block} ${styleTop}`}>{textTop}</div>
        </div>
      </div>
    </div>
  )
}
export default Header;