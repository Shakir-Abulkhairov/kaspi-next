import { Promo, Services, KaspiShop, SubHeader } from '../components';
export default function Home({ product, cities }) {
  console.log(cities)
  return (
    <>
      <SubHeader product={product.category} cities={cities} />
      <Promo />
      <Services />
      <KaspiShop product={product} />

    </>
  )
}

export async function getServerSideProps() {
  try {
    const res1 = await fetch('http://localhost:3000/api/producrApi/get-top-cat-list');
    const res2 = await fetch('http://localhost:3000/api/producrApi/get-cities-kaz');
    const body1 = await res1.json();
    const body2 = await res2.json();

    if (!body1) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        product: body1,
        cities: body2
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
