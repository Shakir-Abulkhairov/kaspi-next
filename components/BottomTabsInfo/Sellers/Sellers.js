import RatingStar from '../../Rating-Star/RatingStar';
import style from './Sellers.module.css';
function Sellers({ info }) {
  return (
    <>
      {info &&
        info.map((item, i) => {
          return (
            <div className={style.content} key={i}>
              <div className={style.sellers__info}>
                <div>
                  {item.name}
                </div>
                <div className={style.sellers__rating}>
                  <div>
                    <RatingStar data={item} />
                  </div>
                  <div>
                    ( {item.rating.count} отзыва)
                  </div>
                </div>
              </div>
              <div className={style.delivery}>
                {item.info.map((info, i) => <div key={i}>{info}</div>)}
              </div>
              <div className={style.price}>
                {item.price} ₸
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Sellers