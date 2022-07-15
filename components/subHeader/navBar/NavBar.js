import Link from 'next/link';

import style from './NavBar.module.css';

function NavBar({ product }) {

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <nav className={style.nav}>
            <div className={style.nav__list}>
              {
                product && product.map((item, i) => {
                  return (
                    <div className={style.nav__item} key={i}>
                      <Link href={`/cat/${item.mt_prod_cat}`}>
                        <a className={style.nav__link}>
                          <span className={style.nav__text} >
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    </div>
                  )
                })
              }

            </div>
          </nav>
        </div>

      </div>

    </>
  )
}

export default NavBar