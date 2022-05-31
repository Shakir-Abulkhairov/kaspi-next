import { Promo, Services, KaspiShop } from '../components';
import { useTranslations } from 'next-intl';
export default function Home({ product }) {
  const t = useTranslations('home');
  return (
    <>
      <Promo />
      <Services />
      <KaspiShop />
    </>
  )
}
export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/productsApi/productApi');
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
