import { Promo, Services, KaspiShop, SubHeader } from '../components';
import { useTranslations } from 'next-intl';
export default function Home({ product }) {
  const t = useTranslations('home');
  return (
    <>
      <SubHeader product={product} />
      <Promo />
      <Services />
      <KaspiShop product={product} />

    </>
  )
}
export async function getStaticProps() {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
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
        ques: null
      }
    }
  }
}
