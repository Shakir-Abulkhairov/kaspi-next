import { useState, useEffect } from "react";
import RatingStar from "../Rating-Star/RatingStar";
import style from './BottomSellers.module.css';
import Sellers from "./Sellers/Sellers";

function BottomSellers({ name, electronics }) {

  const [toggleState, setToggleState] = useState(1);
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    const sellersFetch = async () => {
      const responseBottom = await fetch('http://localhost:3000/api/bottom-tabs-info/bottom-sellers');
      const bodyBottom = await responseBottom.json();
      setSellers(bodyBottom)
    }
    sellersFetch()
  }, []);


  const toggleTab = (index) => {
    setToggleState(index);
  };
  //styles
  const tabs = `${style.tabs} ${style.active__tabs}`;
  const content = `${style.content} ${style.active__content}`;

  return (
    <div className={style.container}>
      <div className={style.tabs__content}>
        <ul className={style.bloc__tabs}>
          <li
            className={toggleState === 1 ? tabs : style.tabs}
            onClick={() => toggleTab(1)}
          >
            Продавцы
          </li>
          <li
            className={toggleState === 2 ? tabs : style.tabs}
            onClick={() => toggleTab(2)}
          >
            Отзывы
          </li>
          <li
            className={toggleState === 3 ? tabs : style.tabs}
            onClick={() => toggleTab(3)}
          >
            Характеристики
          </li>
          <li
            className={toggleState === 4 ? tabs : style.tabs}
            onClick={() => toggleTab(4)}
          >
            Описание
          </li>
        </ul>

        <div className={style.content__tabs}>
          <div
            className={toggleState === 1 ? content : style.content}
          >
            <Sellers info={sellers} />
          </div>

          <div
            className={toggleState === 2 ? content : style.content}
          >
            <h2>Отзывы {name}</h2>
            <div>
              {
                electronics.user_reviews.map((item, i) => (
                  <div className={style.bottom__wrapper} key={i}>
                    <div className={style.bottom__left}>
                      {/* <RatingStar data={item.rating} /> */}
                      <div>{item.user__name}</div>
                      <div className={style.bottom__date}>{item.date}</div>
                    </div>
                    <div className={style.bottom__right}>
                      <div dangerouslySetInnerHTML={{ __html: item.comment_html }} ></div>
                      <div className={style.bottom__users}>{item.useful_cnt} из {item.useful_max} человек посчитали отзыв полезным.</div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div
            className={toggleState === 3 ? content : style.content}
          >
            <h2>Характеристики {name}</h2>
            <dl className={style.specification_list}>
              <dt className={style.specification_list__term}><h4>Основные характеристики</h4></dt>

              <dd className={style.specification_list__specs}>
                <dl className={style.specification_list__spec}>
                  <dt className={style.specification_list__spec_term}>
                    <span className={style.specification_list__spec_term_text}>Максимальный вес пользователя</span>
                  </dt>
                  <dd className={style.specification_list__spec_term_definition}>100 кг</dd>
                </dl>
              </dd>
            </dl>
          </div>
          <div
            className={toggleState === 4 ? content : style.content}
          >
            <div dangerouslySetInnerHTML={{ __html: electronics.descr }} className={style.descr}></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BottomSellers