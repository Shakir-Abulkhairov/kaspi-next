import {Carousel} from 'react-bootstrap';
import SliderComponent from './SliderComponent';

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