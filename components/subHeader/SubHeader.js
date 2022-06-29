import NavBar from './navBar/NavBar';
import SeacrchBar from './searchBar/SearchBar';
import style from './SubHeader.module.css';

function SubHeader({ product, cities, change, confirm, setSearchTerm, searchTerm }) {

  return (
    <>
      <SeacrchBar cities={cities} change={change} confirm={confirm} searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <NavBar product={product} />
    </>
  )
}

export default SubHeader