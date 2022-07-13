
import style from './Favorite.module.css';

const FavoriteDesktop = () => {

  return (
    <>

      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.favorite}>
            <div className={style.favorite__img}>
              <img src='https://static.thenounproject.com/png/1318554-200.png' />
            </div>
            <div className={style.favorite__text}>
              Здесь будут избранные товары.
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FavoriteDesktop