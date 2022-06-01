
import Link from "next/link";
import style from './Products.module.css';
function Products({ products }) {

    return (
        <>
            <div className="container">
                <h2 className="title">
                    Продукты Kaspi.kz
                </h2>
                <div className={style.wrapper} key={products.id}>
                    {
                        products.map((product) => {
                            return (

                                <div className={style.cards}>
                                    <a className={style.item}>
                                        <div className={style.title}>
                                            {product.title}
                                        </div>
                                        <div className={style.details}>
                                            <div className={style.description}>
                                                {product.text}
                                            </div>
                                            <div className={style.img}>
                                                <img src={product.img} />
                                            </div>
                                        </div>
                                        <div className={style.action}>
                                            <div>
                                                <Link href={`${product.srcLink}`}>
                                                    <a>
                                                        {product.link}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products