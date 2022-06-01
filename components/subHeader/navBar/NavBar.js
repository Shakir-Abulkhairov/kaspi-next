import Link from 'next/link';
import style from './NavBar.module.css';

function NavBar({ product }) {

  return (
    <>
      <div className={style.wrapper}>
        <div className='container'>
          <nav className={style.nav}>
            <div className={style.nav__inner}>
              <ul className={style.nav__list}>
                {
                  product.map((item, i) => {
                    return (
                      <li className={style.nav__item} key={i}>
                        <Link href={`/${item}`}>
                          <a className={style.nav__link}>
                            <span className={style.nav__text}>
                              {item}
                            </span>
                          </a>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar