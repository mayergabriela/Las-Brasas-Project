import About from "./components/about/about";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import Banner from "./components/Contact/Banner";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Carousel />
      <About />
      <Banner />
    </main>
  );
}
