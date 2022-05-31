import {Container} from 'react-bootstrap';
import SliderCard from './Slider/SliderCard';
// import ReactCardSlider from 'react-card-slider-component';
import style from '../styles/Services.module.css';
function Services({messages}) {
    
  return (
    <>
        <div className={style.wrapper}>
            <Container>
                    <h2 className='title'>Сервисы Kaspi.kz</h2>
                    <SliderCard/>
            </Container>
        </div>
    </>
  )
}

export default Services