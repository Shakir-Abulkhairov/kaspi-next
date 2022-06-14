import Link from 'next/link';
import style from './Electronics.module.css';
import LeftCatList from '../../components/CatListSides/LeftCatList/LeftCatList';
import RightCatList from '../../components/CatListSides/RightCatList/RightCatList';
function ItemDetails({ category }) {

  return (
    <>
      <div className={style.wrapper}>
        <div className='container'>
          {
            category.map((category) => {
              return (
                <div className={style.content} key={category.id}>
                  <LeftCatList category={category} />
                  <RightCatList category={category} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetails