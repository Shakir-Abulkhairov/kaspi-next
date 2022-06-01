import cn from 'classnames'
import style from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
  return (
    <>
      <nav className={cn("navbar navbar-expand-lg navbar-light bg-light fixed-top ", style.navBar)}>
        <div className="container-fluid">
          <Link href="/" passHref><div className='navbar-brand'><img src='https://kaspi.kz/img/Logo.svg' /></div></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" passHref><a className="nav-link" >На главную</a></Link>
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