import Link from 'next/link';

import style from './NavBar.module.css';

function NavBar({ product }) {

  return (
    <>
      <div className={style.wrapper}>
        <div className='container'>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              {
                product && product.map((item, i) => {
                  return (
                    <li className={style.nav__item} key={i}>
                      <Link href={`/cat/${item.id}`}>
                        <a className={style.nav__link}>
                          <span className={style.nav__text} >
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    </li>
                  )
                })
              }

            </ul>
          </nav>
          <div className={style.items}>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
            <div className={style.item}></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default NavBar