import { useSelector } from 'react-redux';
import Products from '../../../components/Products/Products';
import style from './Favorite.module.css';

const FavoriteMobile = () => {
  const { favoriteItems, isFavorite } = useSelector(({ favorites }) => favorites);
  return (
    <div className={style.wrapper}>
      <div className='container'>
        <div className={style.content}>
          {
            favoriteItems.map(item => <div>{item.title}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default FavoriteMobile