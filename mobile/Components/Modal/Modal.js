import { useEffect, useState } from 'react';
import cn from 'classnames';
import style from './Modal.module.css'

const Modal = ({ toggleInvisible, cities }) => {

  return (
    <div className={style.modal__wrapper}>
      <div className={style.modal}>

        <div className={style.modal__top}>
          <div className={style.modal__top_header}>

            <span className={style.modal__icon_back} onClick={toggleInvisible}>
              {/* <img src='/image/mobile/back.svg' /> */}
            </span>
            <div className={style.city__text}>Выберите Ваш город</div>

          </div>
          <div className={style.modal__top_search}>
            <div className={cn(style.container, style.search__block)}>
              <input type="text" className={style.search__input} />
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.modal__content}>
            {
              cities && cities.map((city) => {
                return (
                  <div className={style.city} key={city.id}>
                    {city.name}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal