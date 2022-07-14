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
                    <span className={style.add_favorite}><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 369.486 369.486"
                        xmlSpace="preserve">

                        <path d="M184.743,357.351c-3.478,0-6.798-1.449-9.164-3.998l-147.67-159.16c-0.038-0.041-0.076-0.082-0.113-0.123
			C9.871,174.223,0,147.921,0,120.008c0-27.914,9.871-54.215,27.796-74.061l2.244-2.484c18.246-20.201,42.608-31.327,68.599-31.327
			s50.354,11.126,68.601,31.328l17.503,19.38l17.503-19.379c18.246-20.202,42.608-31.328,68.6-31.328s50.354,11.126,68.601,31.329
			l2.241,2.478c17.928,19.851,27.799,46.152,27.799,74.065s-9.872,54.215-27.796,74.061c-0.037,0.043-0.075,0.084-0.113,0.125
			l-147.671,159.16C191.541,355.901,188.221,357.351,184.743,357.351z M46.295,177.252l138.448,149.219l138.448-149.22
			c28.485-31.603,28.467-82.97-0.055-114.549l-2.239-2.478c-13.449-14.891-31.224-23.09-50.051-23.09
			c-18.828,0-36.603,8.199-50.048,23.085L194.02,89.869c-2.369,2.624-5.74,4.121-9.275,4.121s-6.906-1.497-9.276-4.121
			l-26.779-29.648c-13.446-14.887-31.22-23.086-50.048-23.086S62.039,45.333,48.594,60.22l-2.244,2.484
			C17.828,94.283,17.809,145.65,46.295,177.252z"/>
                    </svg>
                        <style jsx>{`
                       svg{
                        enable-background:new 0 0 369.486 369.486;
                        fill:red;
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