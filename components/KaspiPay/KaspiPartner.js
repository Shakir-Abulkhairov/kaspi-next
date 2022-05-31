import style from '../../styles/KaspiPay/KaspiPartner.module.css';

function KaspiPartner() {
  return (
    <div className={style.partner}>
                        <h2 className='title'>Стать Партнером</h2>
                        <div className={style.cards}>
                            <div className={style.cardsItem}>
                                <div className={style.heading}>
                                    <div className={style.title}>
                                      Продавать
                                      в Интернет-магазине
                                      на Kaspi.kz
                                    </div>
                                    <div className={style.img}>
                                        <img src='https://kaspi.kz/img/cart.svg'/>
                                    </div>
                                </div>
                                <div className={style.description}>
                                  Около 11 млн покупателей,
                                  доставка товаров по всему Казахстану, возможность продавать в кредит и рассрочку.
                                </div>
                                <div className={style.action}>
                                     <a href="#" className={style.actionLink}>Начать продавать в Интернет-магазине</a>
                                </div>
                            </div>
                            <div className={style.cardsItem}>
                                <div className={style.heading}>
                                    <div className={style.title}>
                                        Продавать
                                        с Kaspi Pay
                                    </div>
                                    <div className={style.img}>
                                        <img src='https://kaspi.kz/img/kaspipay_icon.svg'/>
                                    </div>
                                </div>
                                <div className={style.description}>
                                    Принимайте оплату с Kaspi Gold, Red и Kredit. Откройте счет онлайн бесплатно
                                    и получите мобильный POS за 5 минут.
                                </div>
                                <div className={style.action}>
                                     <a href="#" className={style.actionLink}>Начать продавать с Kaspi Pay</a>
                                </div>
                            </div>
                        </div>
                  </div>
  )
}

export default KaspiPartner