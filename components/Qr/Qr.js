import {Container} from 'react-bootstrap';
import style from '../../styles/Qr/Qr.module.css';

export default function Qr() {
  return (
        <>
           <div className={style.wrapper}>
            <Container>
                    <h2 className="title">
                    Сканируйте, чтобы перейти
                    в приложение Kaspi.kz
                    </h2>
                    <div className={style.blockImg}>
                        <img className={style.img} src='https://kaspi.kz/img/qr-link-main.svg'/>
                    </div>
                </Container>
           </div>
        </>
  )
}
