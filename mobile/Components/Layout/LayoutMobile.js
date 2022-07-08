import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

const LayoutMobile = ({ children }) => {
  const [showCities, setShowCities] = useState(false);
  const toggleVisibleCities = () => {
    setShowCities(true)
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default LayoutMobile;