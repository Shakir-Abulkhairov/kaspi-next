import { Carousel } from 'react-bootstrap';
import SliderComponent from './SliderComponent';
import style from './slider-bootstrap/SliderBootstrap.module.css';
function SliderBootstrap() {
  return (
    <>
      <div className={style.sliderBlock}>
        <Carousel variant="dark" indicators>
          <Carousel.Item>
            <SliderComponent />
          </Carousel.Item>
          <Carousel.Item>
            <SliderComponent />
          </Carousel.Item>
          <Carousel.Item>
            <SliderComponent />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default SliderBootstrap