import style from './KaspiShop.module.css';
import SliderBootstrap from '../SliderBootstrap/SliderBootstrap';
function KaspiShop({ product }) {
  return (
    <div className={style.wrapper}>
      <div className='container'>
        <h2 className='title'>Интернет-магазин на Kaspi.kz</h2>
        <SliderBootstrap product={product} />
      </div>
    </div>
  )
}




export default KaspiShop