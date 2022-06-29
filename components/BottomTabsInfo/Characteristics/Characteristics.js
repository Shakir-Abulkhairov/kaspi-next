import { Fragment } from 'react';
import style from './Characteristics.module.css';

function Characteristics({ data }) {
  return (
    <dl className={style.specification_list__el}>
      {data && data.map((item, i) => {
        return (
          <Fragment key={i}>
            <dt className={style.specification_list__term}><h4>{item.char_list}</h4></dt>
            <dd className={style.specification_list__specs}>
              {
                item && item.char_list_arr.map((item, i) => {
                  return (
                    <Fragment key={i}>
                      <dl className={style.specification_list__spec}>
                        <dt className={style.specification_list__spec_term}>
                          <span className={style.specification_list__spec_term_text}>{item.name}</span>
                        </dt>
                        <dd className={style.specification_list__spec_term_definition}>{item.val}</dd>
                      </dl>
                    </Fragment>
                  )
                })
              }
            </dd>
          </Fragment>
        )
      })}
    </dl>
  )
}

export default Characteristics