import style from './CartMobile.module.css';

function CartMobile({ prod }) {

  return (
    <div className={style.wrapper}>
      <div className={style.container}>

        {
          prod.length
            ? <div>товар</div>
            : <div className={style.empty}>
              <div className={style.empty_img}>
                <img src='image/empty.png' />
              </div>
              <div className={style.empty_text}>
                Ваша корзина пуста
              </div>

            </div>
        }

      </div>
    </div>
  )
}

export default CartMobile