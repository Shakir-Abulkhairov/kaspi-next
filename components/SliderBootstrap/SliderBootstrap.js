import style from './slider-bootstrap/SliderBootstrap.module.css';
function SliderBootstrap({ product }) {

  const switchImg = (img) => {
    switch (img) {
      case 'jewelery':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYjei7OgEsoA96v1JGpE-UXoxa0pB47XwMw&usqp=CAU';
      case 'electronics':
        return 'https://kaspi.kz/img/iphone-2x.png';
      case "men's clothing":
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspVZCAgEjsYrMtOQ0gWOuvOZFgpPZ4ylDIA&usqp=CAU';
      case "women's clothing":
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR4_ZhztP0SvApVMUU7_o8X44w0Zb041YNA&usqp=CAU';

      default:
        break;
    }
  }
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          {/* {
            product.map((item, i) => {
              console.log(item)
              return (
                <div
                  className={i === 0 ? "carousel-item active" : ''}
                  key={i}>
                  <div className={cn(style.wrapper, "carousel-caption d-none d-md-block")}>
                  <a href="#" className={style.item}>
                    <span className={style.title}>{item}</span>
                    <span className={style.img}>
                      <img src={switchImg(product)} classname="d-block w-100" />
                    </span>
                  </a>

                  </div>
                </div>
              )
            })
          }
 */}
          <div class="carousel-item active">
            <img src="https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7a/h0e/48375283089438/back-magic-support-bm07-103093603-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7a/h0e/48375283089438/back-magic-support-bm07-103093603-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item ">
            <img src="https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7a/h0e/48375283089438/back-magic-support-bm07-103093603-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item ">
            <img src="https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h7a/h0e/48375283089438/back-magic-support-bm07-103093603-1.jpg" className="d-block w-100" alt="..." />
          </div>


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default SliderBootstrap