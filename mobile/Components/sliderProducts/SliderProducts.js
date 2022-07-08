import style from './SliderProducts.module.css';

function SliderProducts() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.item}>1</div>
        <div className={style.item}>2</div>
        <div className={style.item}>3</div>
        <div className={style.item}>4</div>
      </div>
    </div>
  )
}

export default SliderProducts