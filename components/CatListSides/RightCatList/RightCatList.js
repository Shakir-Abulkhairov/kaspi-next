import { Fragment } from 'react';
import Link from 'next/link';
import style from './RightCatList.module.css';

function RightCatList({ category }) {

  return (
    <div className={style.right}>
      {
        category.map(cat => {
          return (
            <Fragment key={cat.id}>
              <h2 className={style.category_header}>{cat.name}</h2>
              <div className={style.right_content}>
                {
                  cat.subcat_arr.map(subcat => {
                    return (
                      <div key={subcat.id} className={style.cat__block}>
                        <ul className={style.subcat_ul}>
                          <span className={style.sub_name}>{subcat.name}</span>
                          {
                            subcat.subcat_arr.map((subcat) => {

                              return (
                                <Link key={subcat.id} href='/product'>
                                  <a>
                                    <li className={style.subcat_li}>{subcat.name}</li>
                                  </a>
                                </Link>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default RightCatList