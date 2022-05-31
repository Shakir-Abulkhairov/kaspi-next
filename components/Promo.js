import {Container,Col} from 'react-bootstrap';
import Image from 'next/image';
import style from '../styles/Promo.module.css';
function Promo() {
  return (
    <>
      <div className={style.wrapper}>
          <Container>
                <Col md={7}>
                    <Image src='https://kaspi.kz/img/main_logo.svg' width={760} height={160}  />
                </Col>
                <Col md={5}>
                    <Image src='https://kaspi.kz/img/phone-2x.png'  width={290} height={350} />
                </Col>
          </Container>
      </div>
    </>
  )
}

export default Promo