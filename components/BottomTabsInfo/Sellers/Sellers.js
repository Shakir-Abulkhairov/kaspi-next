import { useEffect, useState } from 'react';
import RatingStar from '../../Rating-Star/RatingStar';
import style from './Sellers.module.css';
function Sellers() {
  const [sellers, setSellers] = useState();
  const handleSellersRequest = async () => {
    const res = await fetch('http://localhost:3000/api/bottom-tabs-info/bottom-sellers');
    const body = await res.json();
    setSellers(body);
  };
  useEffect(() => {
    handleSellersRequest()
  }, []);

  return (
    <>

      {sellers && <div className={style.content}>
        <div className={style.sellers__info}>
          <div>
            {sellers.name}
          </div>
          <div className={style.sellers__rating}>
            <div>
              <RatingStar data={sellers} />
            </div>
            <div>
              ( {sellers.rating.count} отзыва)
            </div>
          </div>
        </div>
        <div className={style.delivery}>
          <div dangerouslySetInnerHTML={{ __html: sellers.info }} ></div>
        </div>
        <div className={style.price}>
          {sellers.price} ₸
        </div>
      </div>
      }
    </>
  )
}

export default Sellers