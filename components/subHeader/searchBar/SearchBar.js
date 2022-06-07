import { useState } from 'react';
import Modal from '../../ModalBlock/Modal';
import style from './searchBar.module.css';

function searchBar({ cities }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [nameCity, setNameCity] = useState(null);
  const [isActive, setIsActive] = useState({
    cities,
    activeObject: null
  });

  const toggleVisiblePopup = () => {
    setVisiblePopup(true);
  };
  const toggleVisiblePopupClose = () => {
    setVisiblePopup(false);
  };
  const changeCityName = (nameCity) => {
    setNameCity(nameCity);
    setVisiblePopup(false);
  }


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
            <a onClick={toggleVisiblePopup} className={style.link}>
              Мой город
              <br />
              <span className={style.city__link}>{nameCity || 'выберите ваш город'}</span>
            </a>

            {visiblePopup &&
              <Modal
                toggleVisiblePopupClose={toggleVisiblePopupClose}
                changeCityName={changeCityName}
                isActive={isActive}
                setIsActive={setIsActive}
              />}
          </div>

        </form>
      </div>
    </div>
  )
}

export default searchBar