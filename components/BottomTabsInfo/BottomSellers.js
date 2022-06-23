import { useState } from "react";
import style from './BottomSellers.module.css';
import Sellers from "./Sellers/Sellers";

function BottomSellers({ name, info, bodyBottom2 }) {
  const [toggleState, setToggleState] = useState(1);

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
            <Sellers info={info} />
          </div>

          <div
            className={toggleState === 2 ? content : style.content}
          >
            <h2>Отзывы {name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>

          <div
            className={toggleState === 3 ? content : style.content}
          >
            <h2>Характеристики {name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
          <div
            className={toggleState === 4 ? content : style.content}
          >
            <h2>Content 4</h2>
            <p>
              {
                bodyBottom2.map((item, i) => (
                  // <div key={i}>{item.descr}</div>
                  console.log(item.descr)
                ))
              }
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BottomSellers