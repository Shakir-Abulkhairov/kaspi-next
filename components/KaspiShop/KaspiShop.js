import {Container} from 'react-bootstrap';
import style from './KaspiShop.module.css';
import SliderBootstrap from '../SliderBootstrap/SliderBootstrap';
function KaspiShop() {
  return (
    <div className={style.wrapper}>
          <Container>
              <h2 className='title'>Интернет-магазин на Kaspi.kz</h2>
              <SliderBootstrap/>
          </Container>
    </div>
  )
}

export default KaspiShop