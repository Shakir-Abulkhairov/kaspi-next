import { NextIntlProvider } from 'next-intl';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default
    }
  };
}

export default MyApp
