import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import Link from 'next/link';
import style from './Cities.module.css';

import { addCity } from '../../redux/slices/cities';

export default function Cities({ cities, changeCityName }) {
  const dispatch = useDispatch();

  const handleClick = (city) => {
    dispatch(addCity(city))
  };
  const { cityItem } = useSelector(({ cities }) => cities);

  const toggleActiveStyle = (c) => {
    if (c.name == cityItem?.name) {
      return style.active
    } else {
      return
    }
  };

  return (
    <>
      <h1 className='title'>Выберите Ваш город</h1>
      <div className={style.modal__cities}>
        <ul className={cn(style.block__link,)}>
          {
            cities && cities.map((city) => {
              return (
                <li
                  key={city.id}
                  onClick={() => {
                    changeCityName(city.name);
                    handleClick(city);
                  }}
                  className={cn(style.city__link, toggleActiveStyle(city))}
                ><Link href='/'><a>{city.name}</a></Link></li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

