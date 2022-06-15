import Image from 'next/image';
import style from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
function Cart() {
  const prod = useSelector((state) => state.cart.items);
  const price = useSelector((state) => state.cart.totalPrice);
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.cart}>
            <div className={style.cart__top}>
              <h2 className={style.content__title}>
                <Image src='/image/bag.svg' width={40} height={40} />
                Корзина
              </h2>
              <div className={style.cart__clear}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span>Очистить корзину</span>
              </div>
            </div>
            {
              prod && prod.map((item) => (
                <div className={style.content__items} key={item.id}>
                  <div className={style.card__item} >
                    <div className={style.card__item_img}>
                      <img src={item.image} />
                    </div>
                    <div className={style.card__item_info}>
                      <h3>{item.title}</h3>
                      <p>{item.category}</p>
                    </div>
                    <div className={style.card__item_count}>
                      <div className={style.button__cirlce}><Image src='https://www.svgrepo.com/show/103355/minus-sign-of-a-line-in-horizontal-position.svg' width={10} height={10} /></div>
                      <b>
                        {item.cartQuantity}
                      </b>
                      <div className={style.button__cirlce}><Image src='https://www.svgrepo.com/show/59666/plus.svg' width={10} height={10} /></div>
                    </div>
                    <div className={style.card__item_price}>
                      <b>
                        {item.price}
                      </b>
                    </div>
                    <div className={style.card__item_remove}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                  </div>
                </div>
              ))
            }
            <div className={style.cart__bottom}>
              <div className={style.cart__bottom_details}>
                <span>В корзине <b>5 товаров</b></span>
                <span> Сумма заказа : <b>{price} ₸</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart