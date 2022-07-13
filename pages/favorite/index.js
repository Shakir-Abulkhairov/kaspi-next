import React from 'react'
import FavoriteDesktop from './FavoriteMobile/FavoriteMobile'
import FavoriteMobile from './FavoriteDesktop/FavoriteDesktop'

const Favorite = ({ isMobile }) => {
  return (
    <>
      {
        isMobile
          ? <FavoriteDesktop />
          : <FavoriteMobile />
      }
    </>
  )
}

export default Favorite