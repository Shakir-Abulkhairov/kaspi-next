import Products from '../../components/Products/Products';
import Link from "next/link";
import cn from 'classnames';
import style from '../cat/Electronics.module.css';

function Electronics({ category }) {
  console.log(category)
  return (
    <>
      <div className={style.wrapper}>
        <div className="container">
          <div className={style.products__block}>
            <div className={style.block__inner}>
              {
                category.map((product) => {
                  return (
                    <div className={cn(style.block__item)}>
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