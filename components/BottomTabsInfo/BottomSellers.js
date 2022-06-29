import { useState, useEffect } from "react";
import Link from 'next/link';
import RatingStar from "../Rating-Star/RatingStar";
import style from './BottomSellers.module.css';
import Sellers from "./Sellers/Sellers";
import Reviews from "./Reviews/Reviews";
import Characteristics from "./Characteristics/Characteristics";

function BottomSellers({ name, electronics }) {

  const [toggleState, setToggleState] = useState(1);
  const [sellers, setSellers] = useState([]);

  const sellersFetch = async () => {
    const responseBottom = await fetch('http://localhost:3000/api/producrApi/get-product-details');
    const bodyBottom = await responseBottom.json();
    setSellers(bodyBottom)
  }

  useEffect(() => {
    sellersFetch()
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const checkTab = (tab) => {
    return tab ? true : false
  }

  //styles
  const tabs = `${style.tabs} ${style.active__tabs}`;
  const content = `${style.content} ${style.active__content}`;

  return (
    <div className={style.container}>
      <div className={style.tabs__content}>
        <ul className={style.bloc__tabs}>
          {checkTab(sellers) && <li
            className={toggleState === 1 ? tabs : style.tabs}
            onClick={() => toggleTab(1)}
          >
            Продавцы
          </li>}
          {checkTab(electronics.user_reviews) && <li
            className={toggleState === 2 ? tabs : style.tabs}
            onClick={() => toggleTab(2)}
          >
            Отзывы
          </li>}
          {checkTab(electronics.charac) && <li
            className={toggleState === 3 ? tabs : style.tabs}
            onClick={() => toggleTab(3)}
          >
            Характеристики
          </li>}
          {checkTab(electronics.descr) && <li
            className={toggleState === 4 ? tabs : style.tabs}
            onClick={() => toggleTab(4)}
          >
            Описание
          </li>}
        </ul>
        {/*     Sellers     */}

        <div className={style.content__tabs}>
          {checkTab(sellers) && <div
            className={toggleState === 1 ? content : style.content}
          >
            <Link href='/address/SellersAddress'>
              <a>
                <Sellers info={sellers.sellers} />
              </a>
            </Link>

          </div>}
          {/*     Reviews     */}

          {checkTab(electronics.user_reviews) && <div
            className={toggleState === 2 ? content : style.content}
          >
            <h2>Отзывы {name}</h2>
            <Reviews data={electronics.user_reviews} />
          </div>}
          {/*     Characteristics     */}

          {checkTab(electronics.charac) && <div
            className={toggleState === 3 ? content : style.content}
          >
            <h2>Характеристики {name}</h2>
            <Characteristics data={electronics.charac} />
          </div>}
          {/*     Description     */}

          {checkTab(electronics.descr) && <div
            className={toggleState === 4 ? content : style.content}
          >
            <div dangerouslySetInnerHTML={{ __html: electronics?.descr }} className={style.descr}></div></div>}
        </div>
      </div>
    </div>
  );
}

export default BottomSellers