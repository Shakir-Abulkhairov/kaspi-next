import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import style from './slider-bootstrap/SliderBootstrap.module.css';
function SliderBootstrap({ product }) {

  const [nextHotsMoving, setNextHotMoving] = useState(0);

  function nextHotHandler() {
    setNextHotMoving((prev) => prev - 1200);
    if (nextHotsMoving <= -1200) setNextHotMoving(0); //custom: should be changed
  }
  function prevHotHandler() {
    setNextHotMoving((prev) => prev + 1200);
    if (nextHotsMoving <= 0) setNextHotMoving(-1200); //custom: should be changed
  }

  return (
    <div className={style.slider_main_cont}>
      {/* BUTTON PREV */}
      <button className={cn(style.btn_prev_hot, style.btn)} onClick={prevHotHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="leftBtn"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* // */}

      {/* SLIDER */}
      <div className={style.cont_images_sell_slider}>
        <div
          className={style.hot_object}
          style={{ marginLeft: `${nextHotsMoving}px` }}
        >
          {/* add IMAGES next!!! */}
          <div className={style.hot_images_row}>
            {product.map((item) => {
              return (
                <Link href='/product' key={item.id}>
                  <a className={style.slider__item}>
                    <span className={style.item__name}>{item.name}</span>
                    <span className={style.item__img}>
                      <img src={item.img} />
                    </span>
                  </a>
                </Link>
              );
            })}
          </div>
          {/* Images ends */}
        </div>
      </div>
      {/* BUTTON NEXT */}
      <button onClick={nextHotHandler} className={cn(style.btn_next_hot, style.btn)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="rightBtn"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* // */}
    </div>
  );
}

export default SliderBootstrap