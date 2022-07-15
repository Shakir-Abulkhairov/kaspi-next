import { useState, Fragment } from 'react';
import Link from 'next/link';
import style from './CategoryList.module.css';


function CategoryList({ categoryArr }) {
  console.log(categoryArr)
  return (
    <>
      <div className={style.wrapper}>
        <ul>
          <div>{categoryArr.name}</div>
          {/* {
            categoryArr.subcat_arr.map((item) => {
              return (
                <li>
                  <ul>
                    <div>{item.name}</div>
                    {
                      item.subcat_arr.map((subcat) => {
                        return (
                          <li>
                            <div>{subcat.name}</div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          } */}
        </ul>
      </div>
    </>
  )
}


export default CategoryList