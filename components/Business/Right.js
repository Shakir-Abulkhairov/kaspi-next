import style from './Business/Right.module.css';
function Right() {
  return (
    <div className={style.products}>
      <a href='#' className={style.item}>
        <div className={style.title}>
          Бизнес Кредит
        </div>
        <div className={style.details}>
          <div className={style.description}>
            Без залога
            и документов.
            Онлайн за 1 минуту
          </div>
          <div className={style.img}>
            <img src='https://kaspi.kz/img/business.svg' />
          </div>
        </div>
        <div className={style.action}>
          <div>Подробнее</div>
        </div>
      </a>
      <a href='#' className={style.item}>
        <div className={style.title}>
          Акции Kaspi QR
        </div>
        <div className={style.details}>
          <div className={style.description}>
            Участвуйте в акциях
            и увеличивайте свои
            продажи

          </div>
          <div className={style.img}>
            <img src='https://kaspi.kz/img/actions-sales.svg' />
          </div>
        </div>
        <div className={style.action}>
          <div>Принять участие</div>
        </div>
      </a>
    </div>
  )
}

export default Right