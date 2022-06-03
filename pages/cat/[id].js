import Link from 'next/link';
import style from './Electronics.module.css';
import { useRouter } from 'next/router'
function ItemDetails({ category }) {

  return (
    <>
      <div className={style.wrapper}>
        <div className='container'>
          <div className={style.content}>
            <div className={style.left}>
              Все категории(200)
            </div>
            <div className={style.right}>
              {
                category.map((category) => {
                  return (
                    <div key={category.id}>
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
                  )
                })
              }
            </div>
          </div>
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