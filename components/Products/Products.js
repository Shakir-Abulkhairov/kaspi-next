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
                <Link href={`/product/itemDetails`}>
                    <a>
                        <div className={style.imgBlock} >
                            <img className={cn("card-img-top", style.img)} src={products.image} alt="Card image cap" />
                        </div>
                    </a>
                </Link>
                <div className={style.card__body}>
                    <div className="card-title">{products.title}</div>
                </div>
                <ul className={style.card__block}>
                    <li className={style.card__item}>{products.price}₸</li>
                    <div className="ratings">
                        <RaitingStar data={products} />
                    </div>
                    <li className={style.card__item}>Число оценивших: {products.rating.count}</li>
                    <li className={style.card__item}>Категория: {products.category}</li>
                    <button onClick={() => handlerAddToCart(products)} className={style.button__add}>Добавить</button>
                </ul>

            </div>
        </>
    )
}

export default Products