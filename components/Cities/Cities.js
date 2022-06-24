import cn from 'classnames';
import Link from 'next/link';
import style from './Cities.module.css';

export default function Cities({ changeCityName, isActive, setIsActive }) {
  const handleClick = (id) => {
    setIsActive({ ...isActive, activeObject: isActive.cities[id] });
  };



  const toggleActiveStyle = (id) => {
    if (isActive.cities[id] === isActive.activeObject) {
      return style.active;
    } else {
      return '';
    }
  }
  return (
    <>
      <h1 className='title'>Выберите Ваш город</h1>
      <div className={style.modal__cities}>
        <ul className={cn(style.block__link,)}>
          {
            isActive.cities.map(city => {
              return (
                <li
                  key={city.id}
                  onClick={() => {
                    changeCityName(city.name);
                    handleClick(city.id);
                  }}
                  className={cn(style.city__link,
                    toggleActiveStyle(city.id),
                  )}
                ><Link href='/'><a>{city.name}</a></Link></li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

