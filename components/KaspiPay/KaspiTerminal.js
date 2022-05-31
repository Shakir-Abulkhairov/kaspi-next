import style from '../../styles/KaspiPay/KaspiTerminal.module.css';

function KaspiTerminal() {
  return (
    <div className={style.terminal}>
                      <div className='title'>
                          Принимайте оплату с Kaspi Pay
                      </div>
                      <div className={style.types}>
                          <div className={style.type}>
                              <div>
                                  <img className={style.img} src='https://kaspi.kz/img/smart-POS-2x.png' />
                              </div>
                              <span>
                                  Smart POS
                              </span>
                          </div>
                          <div className={style.type}>
                              <div>
                                  <img className={style.img} src='https://kaspi.kz/img/POS_mobapp-2x.png' />
                              </div>
                              <span>
                                    Мобильный POS
                              </span>
                          </div>
                          <div className={style.type}>
                              <div>
                                  <img className={style.img} src='https://kaspi.kz/img/QR-display-2x.png' />
                              </div>
                              <span>
                                     QR Дисплей
                              </span>
                          </div>
                      </div>
                        <div className={style.action}>
                            <a href="#" className={style.actionLink}>
                                Принимать оплату с Kaspi Pay
                            </a>
                        </div>
                  </div>
  )
}

export default KaspiTerminal