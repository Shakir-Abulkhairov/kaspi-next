import { useEffect, useState, Fragment } from 'react';
import style from './SliderProducts.module.css';

function SliderProducts({ product }) {

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <nav className={style.nav}>
          <ul className={style.content}>
            {
              product && product.map(data => {
                return (
                  <Fragment key={data.id}>
                    <li className={style.item}>
                      <a className={style.link}>
                        <div className={style.img}>
                          <img src={data.img} />
                        </div>
                        <div className={style.title}>
                          {data.name}
                        </div>
                      </a>
                    </li>
                  </Fragment>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SliderProducts