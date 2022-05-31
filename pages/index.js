import styles from '../styles/Home.module.css'
import {Container} from 'react-bootstrap';
import {Promo,Services,KaspiShop,Products,Business,KaspiPay,Qr} from '../components';
import {useTranslations} from 'next-intl';
export default function Home({messages}) {
  const t = useTranslations('home');
  return (
      <>
        <Promo/>
        <Services messages={messages}/>
        <KaspiShop/>
        <Products/>
        <Business/>
        <KaspiPay/>
        <Qr/>
      </>
  )
}
// pages/index.js
