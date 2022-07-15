import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/slices/favorites';
import cn from 'classnames';
import Link from "next/link";
import RaitingStar from '../Rating-Star/RatingStar';
import style from './Products.module.css';
function Products({ products, handleAddCard, handleChangeTotalPrice }) {
    const [heart, setHeart] = useState(false);
    const dispatch = useDispatch();
    const { favoriteItems, isFavorite } = useSelector(({ favorites }) => favorites);
    console.log(isFavorite)
    const handleAddFavorite = (f) => {
        setHeart(!heart);
        dispatch(addFavorite(f))
    }
    const handlerAddToCart = (product) => {
        handleAddCard(product);
        handleChangeTotalPrice(product.price)
    }

    return (
        <>
            <div className={style.card}  >
                <div className={style.imgBlock} >
                    <span className={style.add_favorite} onClick={() => handleAddFavorite(products)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z" />
                        </svg>

                        <style jsx>{`
                       svg{
                        enable-background:new 0 0 369.486 369.486;
                        fill:${favoriteItems ? 'red' : 'grey'};
                       }
                    `}</style>
                    </span>
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
                        <button onClick={() => handlerAddToCart(products)} className={style.button__add}>В корзину</button>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Products