import Link from 'next/link';
import style from './Electronics.module.css';
import { useState, useEffect } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
function ItemDetails({ category }) {
  const [categoryList, setCategoryList] = useState(false);
  const categotyVisible = () => {
    setCategoryList(!categoryList)
  }
  return (
    <>
      <div className={style.wrapper}>
        <div className='container'>
          {
            category.map((category) => {
              return (
                <div className={style.content} key={category.id}>
                  <div className={style.left}>
                    <div>
                      <Link href='/product'><a className='link__blue'>Все категории</a></Link><span className='sub__count'>({category.count})</span>
                    </div>
                    <CategoryList categoryArr={category} />
                  </div>
                  <div className={style.right}>
                    <div >
                      <h2 className={style.category_header}>{category.name}</h2>
                      <div >
                        {
                          category.subcat_arr.map((subcat) => {
                            return (
                              <div key={subcat.id}>
                                <ul className={style.subcat_ul}>
                                  <span className={style.sub_name}>{subcat.name}</span>
                                  {
                                    subcat.subcatProduct_arr.map((subcat) => {

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
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps({ params }) {
  try {
    const response = await fetch(`http://localhost:3000/api/producrApi/get-cat-info`);
    const body = await response.json();

    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        category: body
      }
    }
  } catch (e) {
    return {
      props: {
        category: null
      }
    }
  }
}
export default ItemDetails