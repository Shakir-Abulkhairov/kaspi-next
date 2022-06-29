import Head from 'next/head';
import Header from './Header/Header';
import SubHeader from './subHeader/SubHeader';
import Footer from './Footer/Footer';
const Layout = ({ children, product, cities, change, confirm, setSearchTerm, searchTerm }) => {
  console.log(product)
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Header />
      <SubHeader product={product} cities={cities} change={change} confirm={confirm} searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      {children}
      <Footer />
    </>
  )
}


export default Layout