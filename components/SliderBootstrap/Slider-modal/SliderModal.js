import style from './SliderModal.module.css';

function SliderModal({ img, slider }) {
  return (
    <>
      <div>
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div className="carousel-inner">
            {img.map((src, i) => (
              <div key={i} className={`carousel-item ${i == slider ? 'active' : ''} ${style.item}`}>
                <img src={src} className={`d-block w-100 ${style.img}`} alt="..." />
              </div>
            ))
            }
          </div>
          <button className={`carousel-control-prev ${style.btn}`} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden bg-dark">Previous</span>
          </button>
          <button className={`carousel-control-next`} type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default SliderModal