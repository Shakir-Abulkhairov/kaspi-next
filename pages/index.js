import { Promo, Services, KaspiShop, SubHeader } from '../components';
import SliderProducts from '../mobile/Components/sliderProducts/SliderProducts';


export default function Home({ product, isMobile }) {

  return (
    <>
      {
        !isMobile
          ? (
            <>
              <Promo />
              <KaspiShop product={product} />
            </>
          )
          : <SliderProducts product={product} />
      }
    </>
  )
}


export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/producrApi/get-info-slider-list');
    const body = await response.json();
    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        product: body
      }
    }
  } catch (e) {
    return {
      props: {
        product: null
      }
    }
  }
} 