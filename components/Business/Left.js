import style from '../../styles/Business/Left.module.css';

function Left() {
  return (
    <div className={style.mobApp}>
          <div className={style.mobAppInfo}>
                <img src='https://kaspi.kz/img/kaspipay_icon.svg'/>
                <div className={style.title}>
                    Kaspi Pay. Приложение
                    для бизнеса
                </div>
                <div className={style.details}>
                    <span className={style.titleDetails}>Принимайте оплату с</span>
                    <div className={style.mobAppImg}>
                        <img className={style.img} src='https://kaspi.kz/img/gold.svg'/>
                        <img className={style.img} src='https://kaspi.kz/img/red.svg'/>
                        <img className={style.img} src='https://kaspi.kz/img/kredit.svg'/>
                    </div>
                    <div className={style.actions}>
                        <a href='#' className={style.button}>
                            Подключиться
                        </a>
                    </div>
                </div>
          </div>
          <div className={style.mobAppPhone}>
                <img className={style.phoneImg} src='https://kaspi.kz/img/entrep-phone-2x.png'/>
          </div>
    </div>
  )
}

export default Left