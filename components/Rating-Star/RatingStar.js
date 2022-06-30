import cn from 'classnames';
import style from './RatingStar.module.css';

function RatingStar({ data }) {

  return (
    [...Array(Math.floor(data))].map((item, index) => {
      return (
        <span key={index}>
          <i className={cn("fa fa-star ", style.rating_color)} ></i>
        </span>
      );
    })
  )
}

export default RatingStar