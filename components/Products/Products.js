import cn from 'classnames';
import RaitingStar from '../Rating-Star/RatingStar';
import style from './Products.module.css';
function Products({ products }) {

    return (
        <>
            <div className={style.card}  >
                <div className={style.imgBlock} >
                    <img className={cn("card-img-top", style.img)} src={products.image} alt="Card image cap" />
                </div>
                <div className={style.card__body}>
                    <div className="card-title">{products.title}</div>
                </div>
                <ul className={style.card__block}>
                    <li className={style.card__item}>{products.price}$</li>
                    <div className="ratings">
                        <RaitingStar data={products} />
                    </div>
                    <li className={style.card__item}>Число оценивших: {products.rating.count}</li>
                    <li className={style.card__item}>Категория: {products.category}</li>
                </ul>
            </div>
        </>
    )
}

export default Products