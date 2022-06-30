import cn from 'classnames';
import Link from "next/link";
import RaitingStar from '../Rating-Star/RatingStar';
import style from './Products.module.css';
function Products({ products, handleAddCard, handleChangeTotalPrice }) {

    const handlerAddToCart = (product) => {
        handleAddCard(product);
        handleChangeTotalPrice(product.price)
    }

    return (
        <>
            <div className={style.card}  >
                <div className={style.imgBlock} >
                    <img className={cn("card-img-top", style.img)} src={products.image} alt="Card image cap" />
                </div>
                <div className={style.card__info}>
                    <div className={style.card__body}>
                        <Link href={`/product/itemDetails`}>
                            <a>
                                <div className={style.card__title}>{products.title}</div>
                            </a>
                        </Link>
                    </div>
                    <ul className={style.card__block}>
                        <div className={style.ratings}>
                            <RaitingStar data={products.rating.rate} /> <span>({products.rating.count})</span>
                        </div>
                        <li className={style.card__item}>
                            <div className={style.card__price_text}>Цена</div>
                            <div className={style.card__price}>{products.price}₸</div>
                        </li>
                        <button onClick={() => handlerAddToCart(products)} className={style.button__add}>Добавить</button>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Products