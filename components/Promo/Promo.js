import {Container,Col,Row} from 'react-bootstrap';
import Image from 'next/image';
import style from './Promo.module.css';
function Promo() {
  return (
    <>
      <div className={style.wrapper}>
          <Container >
             <Row>
                  <Col md={7}>
                    <Image src='https://kaspi.kz/img/main_logo.svg' width={760} height={160} />
                  </Col>
                  <Col md={5}>
                    <img src='https://kaspi.kz/img/phone-2x.png' className={style.img} />
                  </Col>
             </Row>
          </Container>
      </div>
    </>
  )
}

export default Promo