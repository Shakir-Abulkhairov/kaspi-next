import { useState, useEffect } from 'react';
import { wrapper } from '../../redux/store';

import Products from '../../components/Products/Products';
import cn from 'classnames';
import style from '../cat/Electronics.module.css';
import LeftCatList from '../../components/CatListSides/LeftCatList/LeftCatList';
import Pagination from '../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addProdAc, fetchItems } from '../../redux/slices/product';
import { addCard, addTotalCount } from '../../redux/slices/cart';

function Electronics({ catProd, setSearchTerm, searchTerm, category }) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(addProdAc(catProd));
  // }, []);
  // const items = useSelector((state) => state.addProd.items);

  const handleAddCard = (card) => {
    dispatch(addCard(card));
  }
  const handleChangeTotalPrice = (totalPrice) => {
    dispatch(addTotalCount(totalPrice))
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);

  const lastProductIndex = productPerPage * currentPage;
  const firstProductIndex = lastProductIndex - productPerPage;

  const currentProduct = catProd && catProd.slice(firstProductIndex, lastProductIndex);




  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div className={style.wrapper}>
      <div className="container">
        <div className={style.products__block}>
          <div className={cn(style.left, style.electronics_left)}>
            <LeftCatList key={category.id} category={category} />
          </div>
          <div className={style.block__inner}>
            {
              currentProduct && currentProduct.filter((val) => {
                if (setSearchTerm.length == 0) {
                  return 'ooops';
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }

              }).map((product) => {
                return (
                  <div className={cn(style.block__item)} key={product.id}>
                    <Products key={product.id} products={product}
                      handleChangeTotalPrice={handleChangeTotalPrice} handleAddCard={handleAddCard} />
                  </div>
                )

              })
            }
          </div>

        </div>
        <Pagination currentPage={currentPage} productPerPage={productPerPage} totalCount={catProd.length} paginate={paginate} />
      </div>

    </div>
  )
}



export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/producrApi/get-product');
  const data = await response.json();
  return {
    props: {
      catProd: data
    }
  };
};

export default Electronics