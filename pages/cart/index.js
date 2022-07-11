import React from 'react'
import Cart from './desktop'
import CartMobile from './mobile'

function index({ isMobile }) {
  console.log(isMobile)
  return (
    <>
      {
        !isMobile
          ? <CartMobile />
          : <Cart />
      }
    </>
  )
}

export default index