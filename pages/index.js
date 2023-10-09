import About from "./components/about/about";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import Banner from "./components/Contact/Banner";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Carousel />
      <About />
      <Banner />
      <Carousel/>
      <About/>
   
    </main>
  );
}
