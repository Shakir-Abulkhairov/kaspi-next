import { useEffect, useState } from 'react';
import { store } from '../redux/store';
import Layout from '../components/Layout';
import App from 'next/app'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import LayoutMobile from '../mobile/Components/Layout/LayoutMobile';
import IndexMobile from '../mobile/Pages';


function MyApp({ Component, pageProps, product, cities, category, isMobile }) {

  const [confirm, setConfirm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const change = () => {
    setConfirm(false)
  }
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setConfirm(true)
  }, []);
  return (
    <>
      <Provider store={store}>
        {
          !isMobile
            ? (
              <Layout product={product} cities={cities} change={change}
                confirm={confirm} searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}>

                <Component {...pageProps} searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm} category={category} isMobile={isMobile} />
              </Layout>
            )
            : (
              <IndexMobile />
            )
        }
      </Provider>
    </>
  )
}
MyApp.getInitialProps = async (appContext) => {
  const UA = appContext.ctx.req?.headers['user-agent'];
  const isMobile = Boolean(UA?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const [res1, res2, res3,] = await Promise.all([
    fetch('http://qoldan-dev.com/api/market/mt_prod_cat/get_top_cat_list'),
    fetch('http://qoldan-dev.com/api/market/c_loc/get_city_list'),
    fetch('http://qoldan-dev.com/api/market/mt_prod_cat/get_cat_list_info'),

  ]);//http://qoldan-dev.com/api/market/mt_prod_cat/find_all
  const [body1, body2, body3] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json(),

  ]);
  //console.log(data)

  return {

    ...appProps,
    product: body1,
    cities: body2,
    category: body3,
    isMobile
  }
}

export default MyApp;
