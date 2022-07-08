import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCities } from '../../../redux/slices/cities';
import cn from 'classnames';
import Modal from '../../ModalBlock/Modal';
import style from './searchBar.module.css';
import Cities from '../../Cities/Cities';

const SearchBar = ({ cities, confirm, change, setSearchTerm, searchTerm }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [nameCity, setNameCity] = useState(null);
  const [findMe, setFindMe] = useState({});

  const dispatch = useDispatch();
  const { cityItems } = useSelector(({ cities }) => cities);

  const findUser = async () => {
    const res = await fetch('https://ipinfo.io/185.217.180.120?token=aadbc8fb362c49');
    const body = await res.json();
    setFindMe(body);
  }

  useEffect(() => {
    const city = localStorage.getItem('city');
    dispatch(addCities(cities))
    setNameCity(city);
  }, [])


  const toggleVisiblePopup = () => {
    setVisiblePopup(true);
    change();

  };
  const toggleVisiblePopupClose = () => {
    setVisiblePopup(false);
  };
  const changeCityName = (nameCity) => {
    setNameCity(nameCity);
    setVisiblePopup(false);
    localStorage.setItem('city', nameCity || findMe.city);
  }






  return (
    <div className={style.wrapper}>
      <div className='container'>
        <form className={style.form}>
          <div className={style.search_bar_wrapper}>
            {/* <div className={style.search_bar_block}> */}
            <input className={style.search_bar_input}
              type='search'
              placeholder='Поиск товара'
              onChange={(e) => { setSearchTerm(e.target.value) }}
              maxLength='256' />
            <button className={style.search_bar_button}>
              <span className={style.search_bar_icon}>
                {/* <img src='https://resources.cdn-kaspi.kz/shop/images/small-search.png' /> */}
              </span>
            </button>
            {/* </div> */}
            <a onClick={toggleVisiblePopup} className={style.link}>
              Мой город
              <br />
              <span className={style.city__link}>{nameCity || 'Укажите город'}</span>
            </a>

            {visiblePopup &&
              <Modal toggleVisiblePopupClose={toggleVisiblePopupClose}>
                <Cities
                  changeCityName={changeCityName}
                  cities={cityItems}
                />
              </Modal>
            }
          </div>
          {confirm &&
            <div className={cn(style.confirm__city)}>
              <span className={style.current__location}>
                Ваш город {nameCity || findMe.city}?
              </span>
              <br />
              <div className={style.confirm__buttons}>

                <button onClick={(e) => {
                  e.preventDefault()
                  change()
                }} className={cn(style.confirm__button, style.button__yes)}>Да</button>

                <button onClick={(e) => {
                  e.preventDefault()
                  toggleVisiblePopup()
                }} className={cn(style.confirm__button, style.button__no)}>Нет</button>

              </div>
            </div>
          }
        </form>
      </div>
    </div>
  )
}

export default SearchBar