import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Banner from '@/components/Banner';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}