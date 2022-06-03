import { Promo, Services, KaspiShop, SubHeader } from '../components';
export default function Home({ product }) {
  console.log(product)
  return (
    <>
      <SubHeader product={product.category} />
      <Promo />
      <Services />
      <KaspiShop product={product} />

    </>
  )
}

export async function getServerSideProps() {

  try {
    const res = await fetch('http://localhost:3000/api/producrApi/get-top-cat-list');
    const body = await res.json();

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
