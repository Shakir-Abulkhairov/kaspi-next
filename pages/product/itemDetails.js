import Image from 'next/image';
import Link from 'next/link';
import RaitingStar from '../../components/Rating-Star/RatingStar';
import style from './ItemDetails.module.css';
const ItemDetails = ({ electronics }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.itemDetails}>
        <div className={style.itemDetails__inner}>
          <div className={style.itemDetails__inner__left}>
            <div className={style.itemDetails__inner__left__item}>
              <div className={style.imgBlock}>
                <Image width="100%" height="100%" layout="responsive" objectFit="contain" className={style.img} src={electronics.image} alt="Card image cap" />
              </div>
            </div>
          </div>
          <div className={style.itemDetails__inner__right}>
            <div className={style.title}>
              {electronics.title}
            </div>
            <div className={style.description}>
              <span className={style.description_span}>Описание:</span> {electronics.description}
            </div>
            <div className={style.category}>
              <span className={style.description_span}>Категория:</span> {electronics.category}
            </div>
            <div className={style.price}>
              <span className={style.description_span}>Цена: </span>{electronics.price} $
            </div>
            <div className={style.category}>
              <RaitingStar data={electronics} /> <span className={style.description_span}>({electronics.rating.count}) отзыв</span>
            </div>
            <button>добавить</button>
            <Link href="/">
              <a className={style.link}>
                ← Назад
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/producrApi/get-product-details');
    const body = await response.json();

    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        electronics: body
      }
    }
  } catch (e) {
    return {
      props: {
        electronics: null
      }
    }
  }
}
export default ItemDetails;