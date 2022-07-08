import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__content}>
          <div className={style.icon}>
            <img className={style.icon__route} src='https://findicons.com/files/icons/2770/ios_7_icons/512/shop.png' />
            <div className={style.icon__text}> магазин</div>
          </div>
          <div className={style.icon}>
            <img className={style.icon__route} src='/image/empty.png' />
            <div className={style.icon__text}> корзина</div>
          </div>
          <div className={style.icon}>
            <img className={style.icon__route} src='https://cdn.iconscout.com/icon/premium/png-128-thumb/catalog-2692713-2233369.png' />
            <div className={style.icon__text}> каталог</div>
          </div>
          <div className={style.icon}>
            <img className={style.icon__route} src='https://static.thenounproject.com/png/1318554-200.png' />
            <div className={style.icon__text}> избранное</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer