import Products from '../../components/Products/Products';
import Link from "next/link";
import style from '../cat/Electronics.module.css';
import { useRouter } from 'next/router'
function Electronics({ category }) {
  console.log(category)
  return (
    <>
      <div className={style.wrapper}>
        <div className="container">
          <div className='row'>
            {
              category.map((product) => {
                return (
                  <div className='col-md-3'>
                    <Link href={`/product/itemDetails`}>
                      <a>
                        <Products key={product.id} products={product} />
                      </a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/producrApi/get-product');
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
export default Electronics