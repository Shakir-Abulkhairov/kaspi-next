import { Promo, Services, KaspiShop, SubHeader } from '../components';
export default function Home({ product }) {
  return (
    <>
      <Promo />
      <Services />
      <KaspiShop product={product} />

    </>
  )
}


