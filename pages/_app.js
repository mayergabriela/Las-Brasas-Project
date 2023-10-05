import "@/styles/globals.css";
import Footer from "./components/Footer.js";
import Card from "./components/Card/Card.js";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <Hero />
      <Card />

      <Footer />
    </>
  );
}
