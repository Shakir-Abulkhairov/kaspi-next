import { useState } from 'react';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

const LayoutMobile = ({ children }) => {
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
      <Header toggleVisibleCities={toggleVisibleCities} />
      {children}
      {
        showCities && <Modal toggleInvisible={toggleInvisible} />
      }
      <Footer />
    </>
  )
}
export default LayoutMobile;