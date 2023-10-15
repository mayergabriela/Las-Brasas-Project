/***** COMPONENTS  *****/
import About from "./components/about/about";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import TakeawayBanner from "./components/Take away/TakeawayBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <About />
      <TakeawayBanner />
    </main>
  );
}
