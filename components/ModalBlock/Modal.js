
import style from './Modal.module.css';

export default function Modal({ toggleVisiblePopupClose, children }) {




  return (
    <div className={style.modal__wrapper}>
      <div className='container'>
        <div className={style.modal}>
          <div className={style.modal__close} onClick={toggleVisiblePopupClose}>
            <div className={style.close__icon}>✖</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

