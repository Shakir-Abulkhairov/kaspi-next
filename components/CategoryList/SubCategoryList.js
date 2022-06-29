import { useState } from 'react';
import Link from 'next/link';
import style from './CategoryList.module.css';

function SubCategoryList({ subcat, saveOpen, saveChange }) {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false
    }
    setToggle(id)
    saveChange()
  }
  return (
    <div key={subcat.id} className={style.sub__wrapper}>
      <span onClick={() => handleToggle(subcat.id)} className={style.arrow}>{(subcat.id === toggle) ? <span className={`${style.circle} ${style.active}`}>⏷</span> : <span className={style.circle}>⏵</span>}</span>
      <ul>
        <div className={style.sub__name}>{subcat.name} <span className='sub__count'>({subcat.count})</span></div>
        {toggle &&
          subcat && subcat.subcatProduct_arr.map((subcat) => {
            return (
              <div key={subcat.id}>
                <li className={style.subcat__links}>
                  <Link href={'/product'}>
                    <a>
                      {subcat.name}
                    </a>
                  </Link>
                </li>
              </div>
            )
          })

        }
      </ul>
    </div>
  )
}

export default SubCategoryList