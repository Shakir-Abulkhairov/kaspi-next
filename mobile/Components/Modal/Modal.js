import style from './Modal.module.css'

const Modal = ({ toggleInvisible }) => {

  return (
    <div className={style.modal__wrapper}>
      <div className={style.modal}>

        <div className={style.modal__top}>
          <div className={style.modal__top_header}>

            <span className={style.modal__icon_back} onClick={toggleInvisible}> &#65124;</span>
            <span className={style.city__text}>Выберите Ваш город</span>

          </div>
          <div className={style.modal__top_search}>
            <div className={style.container}>
              <input type="text" placeholder="поиск " />
            </div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.modal__content}>
            lorem ipsum dolor sit am
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal