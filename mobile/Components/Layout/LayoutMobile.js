import { useState } from 'react';
import { useRouter } from 'next/router';
import style from './Layout.module.css';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

const LayoutMobile = ({ children, cities }) => {
  const router = useRouter();

  const [showCities, setShowCities] = useState(false);
  console.log(router.route)
  const toggleVisibleCities = () => {
    setShowCities(true)
    document.body.style.overflow = "hidden"
  }
  const toggleInvisible = () => {
    setShowCities(false)
    document.body.style.overflow = ""
  }

  const styleTop = `${style.search_input} ${style.input}`

  const changeLayout = () => {
    switch (router.route) {
      case '/':
        return <Header toggleVisibleCities={toggleVisibleCities} styleIcon={style.icon_location} styleTop={styleTop} textTop={'Поиск в Магазине'} changeIcon={'location'} />;
      case '/cart':
        return <Header toggleVisibleCities={toggleVisibleCities} styleIcon={style.icon_back} styleTop={style.center} textTop={'Корзина'} changeIcon={'back'} />
      case '/favorite':
        return <Header toggleVisibleCities={toggleVisibleCities} styleIcon={style.icon_back} styleTop={style.center} textTop={'Избранное'} changeIcon={'back'} />
      default:
        break;
    }
  }
  return (
    <>
      {changeLayout()}
      {children}
      {
        showCities && <Modal toggleInvisible={toggleInvisible} cities={cities} />
      }
      <Footer />
    </>
  )
}
export default LayoutMobile;