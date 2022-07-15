import Link from 'next/link';
import style from './RightCatList.module.css';

function RightCatList({ category }) {
  console.log(category)
  return (
    <div className={style.right}>
      <div >
        <h2 className={style.category_header}>{category.name}</h2>
        <div className={style.right_content}>
          {
            category.subcat_arr.map(subcat => {
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
      </div>
    </div>
  )
}

export default RightCatList