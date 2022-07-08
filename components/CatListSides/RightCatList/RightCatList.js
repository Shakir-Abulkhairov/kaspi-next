import Link from 'next/link';
import style from './RightCatList.module.css';

function RightCatList({ category }) {
  return (
    <div className={style.right}>
      <div >
        <h2 className={style.category_header}>{category.name}</h2>
        <div >
          {
            category.map(item => {
              return item.subcat_arr.map((subcat) => {
                return (
                  <div key={subcat.id}>
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
            })
          }
        </div>
      </div>
    </div>
  )
}

export default RightCatList