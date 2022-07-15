import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames'
import style from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
  const products = useSelector((state) => state.cart.items.length);

  const [dropDown, setDropDown] = useState('');
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(!active)
  }

  const renderDropDown = () => {
    return (

      <div className={style.header__topbar_overflow}>
        <div className={style.topbar__wrapper}>
          <div className={style.topbar__wrapper_content}>
            <Link href='/'>
              <a>
                магазин
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleLeave = () => {
    return setDropDown('')
  }
  const handleHover = () => {
    return setDropDown(renderDropDown())
  }
  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <Link href="/" ><a ><span className={style.logo}><img src='https://kaspi.kz/img/Logo.svg' /></span></a></Link>
          <nav className={cn(style.nav, active ? style.nav__active : '')}>

            <li >
              <Link href="/" ><a className={style.header__item}>Клиентам</a></Link>
            </li>
            <li>
              <Link href="/bizkredit" ><a className={style.header__item}>Бизнес</a></Link>
            </li>
            <li>
              <Link href="/kaspiGuide" ><a className={style.header__item}>Kaspi Гид</a></Link>
            </li>
            <li className={style.tooltip}>
              <Link href="/cart" ><a className={cn(style.header__item, style.last__item, style.img)} > <img src='/image/cart.svg' />{products ? <span className={style.round}>{products}</span> : ''}<span className={style.tooltiptext}>Корзина</span></a></Link>
            </li>
            <li className={style.tooltip}>
              <Link href="/favorite" ><a className={cn(style.header__item, style.last__item, style.img)} ><img src='/image/favorite.svg' /><span className={style.tooltiptext}>Избранное</span></a></Link>
            </li>
          </nav>
          <div></div>
        </div>
      </div>


    </>
  )
}

export default Header