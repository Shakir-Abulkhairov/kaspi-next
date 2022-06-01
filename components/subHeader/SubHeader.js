import NavBar from './navBar/NavBar';
import SeacrchBar from './searchBar/SearchBar';
import style from './SubHeader.module.css';

function SubHeader({ product }) {
  return (
    <>
      <SeacrchBar />
      <NavBar product={product} />
    </>
  )
}

export default SubHeader