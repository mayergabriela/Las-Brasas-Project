import "@/styles/globals.css";
import Footer from "./components/Footer.js";
import Card from "./components/Card/Card.js";
export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
      <Card />

      <Footer />
    </main>
  );
}
