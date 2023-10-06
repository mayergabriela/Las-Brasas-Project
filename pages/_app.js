import "/styles/globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar.js";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <Footer />
    </>
  );
}
