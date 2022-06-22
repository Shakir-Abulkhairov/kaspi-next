import { Promo, Services, KaspiShop, SubHeader } from '../components';

export default function Home({ product }) {
  console.log('06.09.2019' < '06.09.2018')
  return (
    <>
      <Promo />
      <KaspiShop product={product} />
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