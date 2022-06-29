import { useEffect, useState } from 'react';
import { store } from '../redux/store';
import Layout from '../components/Layout';
import App from 'next/app'
import '../styles/globals.css'
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps, product, cities, category }) {

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
        <Layout product={product} cities={cities} change={change}
          confirm={confirm} searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}>

          <Component {...pageProps} searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} category={category} />
        </Layout>
      </Provider>
    </>
  )
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  //product

  const res1 = await fetch('http://qoldan-dev.com/api/market/mt_prod_cat/find_all'); //<=== ошибка CORS,библиотека установлена
  const body1 = await res1.json();

  //cities
  const res2 = await fetch('http://localhost:3000/api/producrApi/get-cities-kaz');
  const body2 = await res2.json();
  //category
  const res3 = await fetch(`http://localhost:3000/api/producrApi/get-cat-info`);
  const body3 = await res3.json();
  //http://dev.qoldan.com/api/market/mt_prod_cat/get_cat_info?id=1

  //console.log(data)

  return {

    ...appProps,
    product: body1,
    cities: body2,
    category: body3
  }
}

export default MyApp;
