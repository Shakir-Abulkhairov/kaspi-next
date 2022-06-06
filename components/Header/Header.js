import { useState } from 'react';
import cn from 'classnames'
import style from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
  const [dropDown, setDropDown] = useState('');
  const renderDropDown = () => {
    return <div className={style.likes__list} ><div>
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
      </div></div>
  }

  const handleLeave = () => {
    return setDropDown('')
  }
  const handleHover = () => {
    return setDropDown(renderDropDown())
  }
  return (
    <>
      <nav className={cn("navbar navbar-expand-lg navbar-light bg-light", style.navBar)}>
        <div className="container-fluid w-75">
          <Link href="/" passHref><div className='navbar-brand'><img src='https://kaspi.kz/img/Logo.svg' /></div></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link" onMouseOver={handleHover} onMouseLeave={handleLeave}>Клиентам{dropDown}</div>
              </li>
              <li className="nav-item">
                <Link href="/bizkredit" passHref><a className="nav-link" >Бизнес</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/kaspiGuide" passHref><a className="nav-link" >Kaspi Гид</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header