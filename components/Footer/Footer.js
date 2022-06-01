import style from './Footer/Footer.module.css';

function Footer() {
  return (
    <>
      <div className={style.wrapper}>
        <div className='container'>
          <div className={style.section}>
            <div className={style.left}>
              <span className={style.copyright}>
                © 2012-2022, АО «Kaspi Bank»
              </span>
              <p className={style.license}>
                Лицензия на проведение банковских и иных операций и деятельности на рынке ценных бумаг №1.2.245/61 от 03.02.2020, выданная Агентством Республики Казахстан по регулированию и развитию финансового рынка
              </p>
              <div>
                <a href="#" className={style.link}>
                  Корпоративный сайт
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer