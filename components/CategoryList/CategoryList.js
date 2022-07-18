import { useState, Fragment } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import style from './CategoryList.module.css';


function CategoryList({ categoryArr }) {
  const [toggle, setToggle] = useState(false);
  let handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.main_list}>

          {
            categoryArr.map(cat => {
              return (
                <Fragment key={cat.id}>
                  {/* main */}
                  <div className={cn(style.li, toggle ? style.toggle_visible_down : style.toggle_visible, style.main)} onClick={handleToggle} ><a>{cat.name}</a></div>
                  <div className={toggle ? style.active : style.disabled}>{cat.subcat_arr.map((item) => <VisibleSubCat item={item} toggle={toggle} key={item.id} />)}</div>
                </Fragment>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}
const VisibleSubCat = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  let handleToggle = () => {
    setToggle(!toggle)
  }
  // item.subcat_arr.map(item => item.subcat_arr.filter(sub => sub != 0));
  // const idx = item.subcat_arr.map(item => item.subcat_arr.filter(sub => sub != 0));

  // console.log(idx);
  // console.log(item.subcat_arr)


  // item.subcat_arr.filter(subcat => console.log(subcat?.subcat_arr.length));


  return (
    <>
      <li onClick={() => handleToggle()} className={cn(style.li, toggle ? style.toggle_visible_down : style.toggle_visible,)} key={item.id}>
        <ul>
          <div> <a>{item.name}</a></div>
          {
            item.subcat_arr.map((subcat) => {

              return (
                <Fragment key={subcat.id}>
                  {/* {
                    idx.map(item => {

                      return item.id != subcat.id
                        ? <li className={cn(toggle ? style.active : style.disabled, style.last_subcat)} >
                          <div >{subcat.name}</div>
                        </li>
                        : <li className={cn(toggle ? style.active : style.disabled, style.last_subcat)} >
                          <div className={style.red}>{subcat.name}</div>
                        </li>
                    })
                  } */}
                  <li className={cn(toggle ? style.active : style.disabled, style.last_subcat)} >
                    <div>{subcat.name}</div>
                  </li>
                </Fragment>
              )
            })
          }
        </ul>
      </li>
    </>
  )
}
const VisibleLastCat = ({ item }) => {
  const [test, setTest] = useState(false);
  let handleToggle = () => {
    setTest(!test)
  }

  return (



    <li onClick={() => handleToggle()} className={cn(style.li, test ? style.toggle_visible_down : style.toggle_visible,)} key={item.id} >
      <div>{item.name}</div>
      {
        item && item.subcat_arr.map(subcat => {
          return (
            <>
              <li className={cn(test ? style.active : style.disabled, style.last_subcat)} key={subcat.id}>
                <a>{subcat.name}</a>
              </li>
            </>
          )
        })
      }
    </li>

  )
}
export default CategoryList