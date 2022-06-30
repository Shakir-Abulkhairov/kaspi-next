import SellersAddress from "../address/[id]";
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { setToggleState } from './../../redux/slices/product';
function AddressReview({ reviews, info }) {

  const dispatch = useDispatch();
  const changeActive = () => {
    dispatch(setToggleState(1))
  }
  useEffect(() => changeActive(), [])
  return (
    <>

      <SellersAddress info={info} >
        {
          reviews && reviews.user_reviews.map((item, i) => {
            return (
              <Fragment key={i}>
                <span>{item.user__name}</span>
                <span>{item.date}</span>
                <div dangerouslySetInnerHTML={{ __html: item?.comment_html }} ></div>
              </Fragment>
            )
          })
        }
      </SellersAddress>
    </>
  )
}
export async function getStaticProps() {
  try {
    const response1 = await fetch('http://localhost:3000/api/get-seller-cart/get-seller-cart');
    const body1 = await response1.json();
    const response = await fetch('http://localhost:3000/api/get-seller-cart/get-review');
    const body = await response.json();

    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        reviews: body,
        info: body1
      }
    }
  } catch (e) {
    return {
      props: {
        reviews: null,

      }
    }
  }
}
export default AddressReview