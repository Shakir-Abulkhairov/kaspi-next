import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

const LayoutMobile = ({ children, cities }) => {
  const router = useRouter();
  console.log(router)
  const [showCities, setShowCities] = useState(false);
  const toggleVisibleCities = () => {
    setShowCities(true)
    document.body.style.overflow = "hidden"
  }
  const toggleInvisible = () => {
    setShowCities(false)
    document.body.style.overflow = ""
  }
  return (
    <>
      <Header toggleVisibleCities={toggleVisibleCities} router={router.route} />
      {children}
      {
        showCities && <Modal toggleInvisible={toggleInvisible} cities={cities} />
      }
      <Footer />
    </>
  )
}
export default LayoutMobile;