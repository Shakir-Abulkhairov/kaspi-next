import Head from 'next/head';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
function Layout({children}) {
  return (
    <>  
        <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                        crossorigin="anonymous"
                />
        </Head>
        <Header/>
        {children}
        <Footer/>
    </>
 )
}

export default Layout