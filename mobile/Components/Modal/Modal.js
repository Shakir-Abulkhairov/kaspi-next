import style from './Modal.module.css'

const Modal = () => {
  return (
    <div className={style.modal__wrapper}>
      <div className={style.container}>
        <div className={style.modal}>
          <div className={style.modal__top}>
            <span className={style.modal__icon_back}> &#65124;</span>
            <span className={style.city__text}>Выберите Ваш город</span>
          </div>
          <div className={style.modal__content}>
            lorem ipsum dolor sit am
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal