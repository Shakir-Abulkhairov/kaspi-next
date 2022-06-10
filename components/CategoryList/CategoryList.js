import { useState } from 'react';
import Link from 'next/link';
import style from './CategoryList.module.css';
import SubCategoryList from './SubCategoryList';

function CategoryList({ categoryArr }) {
  const [categoryList, setCategoryList] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);

  const categotyVisible = () => {
    setCategoryList(!categoryList)
  }
  const saveChange = () => {
    setSaveOpen(true)
  }

  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.cat__list_left}>
          <span onClick={categotyVisible} className={style.arrow__first}>{categoryList ? <span className={`${style.circle} ${style.active}`}>⏷</span> : <span className={style.circle}>⏵</span>}</span>
          {' '}
          <Link href={'/product'}>
            <a>
              {categoryArr.name}
            </a>
          </Link>
          <span className='sub__count'>({categoryArr.count})</span>
          <div>
            {categoryList &&
              categoryArr.subcat_arr.map((subcat) => <SubCategoryList subcat={subcat} saveOpen={saveOpen} saveChange={saveChange} />)
            }
          </div>
        </ul>
      </div>
    </>
  )
}

export default CategoryList