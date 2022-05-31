import {NextIntlProvider} from 'next-intl';
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
export async function getStaticProps({locale}) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default
    }
  };
}
export default MyApp
