import style from './Reviews.module.css';

function Reviews({ data }) {
  return (
    <>
      <div>
        {
          data.map((item, i) => (
            <div className={style.bottom__wrapper} key={i}>
              <div className={style.bottom__left}>
                {/* <RatingStar data={item.rating} /> */}
                <div>{item.user__name}</div>
                <div className={style.bottom__date}>{item.date}</div>
              </div>
              <div className={style.bottom__right}>
                <div dangerouslySetInnerHTML={{ __html: item.comment_html }} ></div>
                <div className={style.bottom__users}>{item.useful_cnt} из {item.useful_max} человек посчитали отзыв полезным.</div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Reviews