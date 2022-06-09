import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import App from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps, product, cities }) {
  const [confirm, setConfirm] = useState(false);
  const change = () => {
    setConfirm(false)
  }
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setConfirm(true)
  }, []);
  return (
    <>
      <Layout product={product} cities={cities} change={change} confirm={confirm}  >
        <Component {...pageProps} product={product} />
      </Layout>
    </>
  )
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const res1 = await fetch('http://localhost:3000/api/producrApi/get-top-cat-list');
  const res2 = await fetch('http://localhost:3000/api/producrApi/get-cities-kaz');
  const body1 = await res1.json();
  const body2 = await res2.json();
  //console.log(data)

  return {

    ...appProps,
    product: body1,
    cities: body2

  }
}

export default MyApp
