import cn from 'classnames';
import style from './SellersAddress.module.css';
function SellersAddress() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={cn(style.container, style.sellers_profile__block)}>
          <div className={style.sellers_profile__inner}>
            <h1 className={style.sellers_profile_name}>GENAU в городе Алматы</h1>
            <div className={style.sellers_profile_date_create}>В Kaspi Магазине с 26.07.2019 г.</div>
            {/* ratin star*/}
            <div className={style.sellers_profile_ratings_info}>Рейтинг рассчитан на основе оценок покупателей и качества работы продавца</div>
            <div className={style.sellers_profile__contact}>
              <span className={style.phone}>
                <img src='https://resources.cdn-kaspi.kz/shop/front/sa/stable/desktop/images/small-smartphone.png' />
              </span>
              <span className={style.number}>
                +7 (707) 200-13-08
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SellersAddress