import "@/styles/globals.css";
import Footer from "./components/Footer.js";
import Card from "./components/Card/Card.js";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import Carousel from "./components/Carousel/Carousel.js";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <Hero />
      <Carousel />
      <Card />

      <Footer />
    </>
  );
}
