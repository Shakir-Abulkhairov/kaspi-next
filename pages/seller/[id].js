import cn from 'classnames';
import Link from 'next/Link';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleState, addProdAc } from '../../redux/slices/product';
import RatingStar from '../../components/Rating-Star/RatingStar';
import styleTabs from '../../components/BottomTabsInfo//BottomSellers.module.css';
import style from './SellersAddress.module.css';

function SellersAddress({ children, info }) {
  const dispatch = useDispatch();

  const { toggleState, items } = useSelector(({ addProd }) => addProd)

  const toggleTab = (index) => {
    dispatch(setToggleState(index));
    dispatch(addProdAc(info))
  };

  useEffect(() => {
    toggleTab(2)
  }, [])

  //styles
  const tabs = `${styleTabs.tabs} ${styleTabs.active__tabs}`;
  const content = `${styleTabs.content} ${styleTabs.active__content}`;
  return (
    <>
      <div className={style.wrapper}>
        {
          items && (
            <>
              <div className={cn(style.container, style.sellers_profile__block)}>
                <div className={style.sellers_profile__inner}>
                  {
                    items?.img && <div className={style.profile__image}>
                      <img src='https://resources.cdn-kaspi.kz/shop/medias/sys_master/root/h94/h89/50625996423198/-.png' alt="profile_image" />
                    </div>
                  }
                  <div className={style.sellers_profile_descr}>
                    <h1 className={style.sellers_profile_name}>{items.name}</h1>
                    <div className={style.sellers_profile_date_create}>В Kaspi Магазине с {items.data_create} г.</div>
                    <RatingStar data={5} />
                    <div className={style.sellers_profile_ratings_info}>Рейтинг рассчитан на основе оценок покупателей и качества работы продавца</div>
                    <div className={style.sellers_profile__contact}>
                      <span className={style.phone}>
                        <img src='https://resources.cdn-kaspi.kz/shop/front/sa/stable/desktop/images/small-smartphone.png' />
                      </span>
                      <span className={style.number}>
                        {items.contacts}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styleTabs.tabs__content}>
                <ul className={styleTabs.bloc__tabs}>
                  {<Link href='/address-review/Review-cart'>
                    <a>
                      <li
                        className={toggleState === 1 ? tabs : styleTabs.tabs}
                        onClick={() => toggleTab(1)}
                      >
                        Отзывы
                      </li>
                    </a>
                  </Link>}


                  <Link href='/seller/SellersAddress'>
                    <a>
                      <li
                        className={toggleState === 2 ? tabs : styleTabs.tabs}
                        onClick={() => toggleTab(2)}
                      >Пункты самовывоза
                      </li>
                    </a>
                  </Link>
                </ul>


                <div className={styleTabs.content__tabs}>
                  <div
                    className={toggleState === 1 ? content : styleTabs.content}>
                    {children}
                  </div>


                  <div
                    className={toggleState === 2 ? content : styleTabs.content}
                  >
                    {items.address}
                    {items.work_schedule}

                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}
export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/get-seller-cart/get-seller-cart');
    const body = await response.json();
    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        info: body,
      }
    }
  } catch (e) {
    return {
      props: {
        info: null,
      }
    }
  }
}
export default SellersAddress