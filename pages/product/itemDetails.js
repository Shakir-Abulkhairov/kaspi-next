import Image from 'next/image';
import { useState } from 'react';
import Modal from '../../components/ModalBlock/Modal';
import Link from 'next/link';
import RaitingStar from '../../components/Rating-Star/RatingStar';
import style from './ItemDetails.module.css';
import SliderModal from '../../components/SliderBootstrap/Slider-modal/SliderModal';
const ItemDetails = ({ electronics }) => {
  const [slider, setSlider] = useState(0);
  const [isAtcive, setIsActive] = useState(false);

  const handleSetActive = () => {
    setIsActive(true)
  }
  const handleSetDisabled = () => {
    setIsActive(false);
  }

  const handleClickSlider = (slideid) => {
    setSlider(slideid)
  }
  return (
    <div className={style.wrapper}>
      <div className={style.itemDetails}>
        <div className={style.itemDetails__inner}>
          <div className={style.itemDetails__inner__left}>
            <div className={style.itemDetails__inner__left__item}>
              <div className={style.imgBlock}>
                <div className={style.slider__main__block}>
                  <div className={style.slider__img} onClick={handleSetActive}>
                    <img src={electronics.image[slider]} />
                  </div>
                  <div className={style.text}>Чтобы увеличить, нажмите на картинку</div>
                  {/* <Image width="100%" height="100%" layout="responsive" objectFit="contain" className={style.img} src={electronics.image[slider]} alt="Card image cap" /> */}
                  <div className={style.slider__block}>
                    {
                      electronics.image.map((img, i) => <div className={`${style.slider} ${slider == i ? style.active : ""}`} onClick={() => handleClickSlider(i)}> <img className={style.img} src={img} alt="Card image cap" /></div>)
                    }
                    {isAtcive &&
                      <Modal toggleVisiblePopupClose={handleSetDisabled} >
                        <SliderModal img={electronics.image} slider={slider} />
                      </Modal>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.itemDetails__inner__right}>
            <div className={style.title}>
              {electronics.title}
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
            <div className={style.description}>
              {electronics.description}
            </div>
            <Link href="/product">
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