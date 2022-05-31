import { Container } from 'react-bootstrap';
import Left from './Left';
import Right from './Right';
import style from './Business/Business.module.css';

function Business() {
  return (
    <>
        <div className={style.wrapper}>
            <Container>
                <h2 className='title'>Для Бизнеса</h2>
                <div className={style.content}>
                <div className={style.left}>
                        <Left/>
                </div>
                    <div className={style.right}>
                      <Right/>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Business