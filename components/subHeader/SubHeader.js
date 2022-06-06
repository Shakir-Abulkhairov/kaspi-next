import NavBar from './navBar/NavBar';
import SeacrchBar from './searchBar/SearchBar';
import style from './SubHeader.module.css';

function SubHeader({ product, cities }) {
  return (
    <>
      <SeacrchBar cities={cities} />
      <NavBar product={product} />
    </>
  )
}

export default SubHeader