import Image from 'next/image';
import style from './Promo.module.css';
function Promo() {
  return (
    <>
      <div className={style.wrapper}>
        <div className='container' >
          <div className={style.content}>
            <div >
              <Image src='https://kaspi.kz/img/main_logo.svg' width={760} height={160} />
            </div>
            <div>
              <img src='https://kaspi.kz/img/phone-2x.png' className={style.img} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promo