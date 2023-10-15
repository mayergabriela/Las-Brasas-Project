import "/styles/globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar.js";
import { CartProvider } from "./context/cartContext";
//import FooterShowCart from "./components/footer/FooterShowCart";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      {/* <FooterShowCart /> */}
    </CartProvider>
  );
}
