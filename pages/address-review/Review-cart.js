import SellersAddress from "../seller/[id]";
import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleState, addProdAc } from './../../redux/slices/product';

function AddressReview({ reviews }) {

  const { toggleState, items } = useSelector(({ addProd }) => addProd)
  console.log(items && items)
  const dispatch = useDispatch();
  const changeActive = () => {
    dispatch(setToggleState(1))
  }
  useEffect(() => changeActive(), [])
  return (
    <>

      <SellersAddress info={items}>
        {
          reviews && reviews.map((item, i) => {
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