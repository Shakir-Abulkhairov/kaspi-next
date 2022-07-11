import { useEffect, useState, Fragment } from 'react';
import style from './SliderProducts.module.css';

function SliderProducts() {
  const [dataSlider, setDataSlider] = useState([]);
  const hadleSliderData = async () => {
    const res = await fetch('http://localhost:3000/api/producrApi/get-info-slider-list');
    const data = await res.json();
    setDataSlider(data);
  }
  useEffect(() => {
    hadleSliderData()
  }, [])
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <nav className={style.nav}>
          <ul className={style.content}>
            {
              dataSlider && dataSlider.map(data => {
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