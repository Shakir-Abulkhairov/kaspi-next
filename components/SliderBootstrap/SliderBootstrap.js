import {Carousel} from 'react-bootstrap';
import SliderComponent from './SliderComponent';
import style from '../../styles/slider-bootstrap/SliderBootstrap.module.css';
function SliderBootstrap() {
  return (
      <>
          <Carousel variant="dark" indicators>
              <Carousel.Item>
                <SliderComponent/>
              </Carousel.Item>
              <Carousel.Item>
                     <SliderComponent/>
              </Carousel.Item>
              <Carousel.Item>
                     <SliderComponent/>
              </Carousel.Item>
          </Carousel>
      </>
  )
}

export default SliderBootstrap