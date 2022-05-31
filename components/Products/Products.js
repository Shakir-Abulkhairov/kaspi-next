import { Container } from "react-bootstrap"
import style from './Products.module.css';
function Products() {
  return (
        <>
            <Container>
                <h2 className="title">
                     Продукты Kaspi.kz
                </h2>
              <div className={style.wrapper}>
                <div className={style.cards}>
                        <a className={style.item}>
                            <div className={style.title}>
                                    kaspi gold
                            </div>
                            <div className={style.details}>
                                <div className={style.description}>
                                    Переводы,
                                    платежи, снятия
                                    без комиссий
                                </div>
                                <div className={style.img}>
                                    <img src='https://kaspi.kz/img/gold.svg'/>
                                </div>
                            </div>
                            <div className={style.action}>
                                    <div>
                                            Открыть Kaspi Gold онлайн
                                    </div>
                            </div>
                        </a>
                </div>
                <div className={style.cards}>
                        <a className={style.item}>
                            <div className={style.title}>
                                    kaspi gold
                            </div>
                            <div className={style.details}>
                                <div className={style.description}>
                                    Переводы,
                                    платежи, снятия
                                    без комиссий
                                </div>
                                <div className={style.img}>
                                    <img src='https://kaspi.kz/img/gold.svg'/>
                                </div>
                            </div>
                            <div className={style.action}>
                                    <div>
                                            Открыть Kaspi Gold онлайн
                                    </div>
                            </div>
                        </a>
                </div>
                <div className={style.cards}>
                        <a className={style.item}>
                            <div className={style.title}>
                                    kaspi gold
                            </div>
                            <div className={style.details}>
                                <div className={style.description}>
                                    Переводы,
                                    платежи, снятия
                                    без комиссий
                                </div>
                                <div className={style.img}>
                                    <img src='https://kaspi.kz/img/gold.svg'/>
                                </div>
                            </div>
                            <div className={style.action}>
                                    <div>
                                            Открыть Kaspi Gold онлайн
                                    </div>
                            </div>
                        </a>
                </div>
                <div className={style.cards}>
                        <a className={style.item}>
                            <div className={style.title}>
                                    kaspi gold
                            </div>
                            <div className={style.details}>
                                <div className={style.description}>
                                    Переводы,
                                    платежи, снятия
                                    без комиссий
                                </div>
                                <div className={style.img}>
                                    <img src='https://kaspi.kz/img/gold.svg'/>
                                </div>
                            </div>
                            <div className={style.action}>
                                    <div>
                                            Открыть Kaspi Gold онлайн
                                    </div>
                            </div>
                        </a>
                </div>
              
              </div>
            </Container>
        </>
  )
}

export default Products