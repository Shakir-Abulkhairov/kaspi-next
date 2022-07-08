import SellersAddress from "./[id]";
import { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleState, addProdAc } from './../../redux/slices/product';
import AddressReview from '../address-review/Review-cart';
function index({ reviews }) {



  return (
    <SellersAddress saveInfo={saveInfo} info={info} toggleTab={toggleTab} items={items}>
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

export default index