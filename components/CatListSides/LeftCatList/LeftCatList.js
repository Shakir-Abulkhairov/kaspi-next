import Link from 'next/link';
import CategoryList from '../../CategoryList/CategoryList';
import style from './LeftCatList.module.css';

function LeftCatList({ category }) {

  return (
    <>
      <div>
        <Link href='/product'><a className='link__blue'>Все категории</a></Link><span className='sub__count'>({category && category.count})</span>
      </div>
      <CategoryList categoryArr={category} />
    </>
  )


}

export default LeftCatList