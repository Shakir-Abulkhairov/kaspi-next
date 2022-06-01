import cn from 'classnames';
import style from './Electronics.module.css';

function Electronics({ electronics }) {
  console.log(electronics)
  return (
    <>
      <div className={style.wrapper}>
        <div className="container">
          <div className='row'>
            {
              electronics.map((item, i) => {
                return (
                  <div className='col-md-3'>
                    <div className={style.card} >
                      <div className={style.imgBlock} >
                        <img className={cn("card-img-top", style.img)} src={item.image} alt="Card image cap" />
                      </div>
                      <div className={style.card__body}>
                        <div className="card-title">{item.title}</div>
                      </div>
                      <ul className={style.card__block}>
                        <li className={style.card__item}>{item.price}$</li>
                        <div className="ratings">

                          {[...Array(Math.floor(item.rating.rate))].map(() => {
                            return (
                              <>
                                <i class="fa fa-star rating-color"></i>
                              </>
                            );
                          })}

                        </div>
                        <li className={style.card__item}>Число оценивших: {item.rating.count}</li>
                        <li className={style.card__item}>Категория: {item.category}</li>
                      </ul>
                    </div>
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
export async function getStaticProps() {
  try {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');
    const body = await response.json();
    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        electronics: body
      }
    }
  } catch (e) {
    return {
      props: {
        electronics: null
      }
    }
  }
}
export default Electronics