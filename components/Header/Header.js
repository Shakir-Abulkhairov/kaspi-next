import { useState } from 'react';
import cn from 'classnames'
import style from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
  const [dropDown, setDropDown] = useState('');
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(!active)
  }
  const renderDropDown = () => {
    return (
      <div className={style.block}>
        <div className={style.likes__list} >
          <h2 className='title'>Сервисы Kaspi</h2>
          <div>
            <Link href='/'>
              <a>
                магазин
              </a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>
                платежи
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
          <div className={style.header__inner}>
            <div className={style.logo}>
              <Link href="/" ><a ><img src='https://kaspi.kz/img/Logo.svg' /></a></Link>
            </div>
            <div className={style.header__burger} onClick={changeActive}>
              <span className={style.burger__item}></span>
              <span className={style.burger__item}></span>
              <span className={style.burger__item}></span>
            </div>
            <div className={style.header__inner_block}>
              <nav className={cn(style.nav, active ? style.nav__active : '')}>
                <span className={style.dropdown_content}>
                  <a className={cn(style.header__item,)} onMouseMove={handleHover} onMouseLeave={handleLeave}>Клиентам{dropDown}</a>
                  <div className={style.dropDown__link}>
                    <div>
                      <Link href='/'>
                        <a>
                          магазин
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href='/'>
                        <a>
                          платежи
                        </a>
                      </Link>
                    </div>
                  </div>
                </span>
                <Link href="/bizkredit" ><a className={style.header__item}>Бизнес</a></Link>
                <Link href="/kaspiGuide" ><a className={style.header__item}>Kaspi Гид</a></Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header