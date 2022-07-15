import Link from 'next/link';
import style from './Electronics.module.css';
import LeftCatList from '../../components/CatListSides/LeftCatList/LeftCatList';
import RightCatList from '../../components/CatListSides/RightCatList/RightCatList';
function ItemDetails({ data }) {

  return (
    <>
      <div className={style.wrapper}>
        <div className='container'>
          <div className={style.content} key={data.id}>
            <div className={style.left}>
              <LeftCatList category={data} />
            </div>
            <RightCatList category={data} />
          </div>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps({ query }) {

  try {
    const response = await fetch(`http://qoldan-dev.com/api/market/mt_prod_cat/get_cat_list_info_for_parent?id=${query.id}`);
    const body = await response.json();

    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        data: body,

      }
    }
  } catch (e) {
    return {
      props: {
        data: null,

      }
    }
  }
}
export default ItemDetails