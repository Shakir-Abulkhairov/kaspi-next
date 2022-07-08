import { useState } from 'react';
import Link from 'next/link';
import style from './CategoryList.module.css';
import SubCategoryList from './SubCategoryList';

function CategoryList({ categoryArr, multiple = true }) {
  // const [categoryList, setCategoryList] = useState(false);
  const [active, setActive] = useState(0);

  // const categotyVisible = () => {
  //   setCategoryList(!categoryList)
  // }
  // const saveChange = () => {
  //   setSaveOpen(true)
  // }

  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.cat__list_left}>
          {/* <span onClick={categotyVisible} className={style.arrow__first}>{categoryList ? <span className={`${style.circle} ${style.active}`}>⏷</span> : <span className={style.circle}>⏵</span>}</span> */}
          {' '}
          {/* <Link href={'/product'}>
            <a>
              {categoryArr.name}
            </a>
          </Link> */}
          {/* <span className='sub__count'>({categoryArr.count})</span> */}
          <div>
            {
              categoryArr.map((item, i) => {
                return (
                  <div className={style.sub__wrapper}>
                    <VisisbleSub item={item} active={active === i}
                      multiple={multiple}
                      onToggle={(e) => setActive((a) => (a === i ? "" : i))} />
                  </div>
                )
              })
            }
          </div>
        </ul>
      </div>
    </>
  )
}
const VisisbleSub = ({ item, active, multiple, onToggle }) => {
  const [visiblity, setVisiblity] = useState(false);

  const isActive = () => (multiple ? visiblity : active);

  const toogleVisiblity = () => {
    setVisiblity((v) => !v);
    onToggle();
  };
  return (
    <>
      <div onClick={toogleVisiblity} className={style.main__name}>{visiblity
        ? <span className={`${style.circle} ${style.active}`}>⏷</span>
        : <span className={`${style.circle} `}>⏵</span>}
        <span className={style.main_cat}>{item.name}</span>
      </div>
      {
        item.subcat_arr.map((subcat) => {
          return (
            <>
              <div className={`${isActive() ? style.accordion_active : style.accordion_deactive}`}>
                <SubCategoryList key={subcat.id} subcat={subcat} />
              </div>
            </>
          )
        })
      }
    </>
  )
}
export default CategoryList