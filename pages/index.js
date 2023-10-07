import About from "./components/about/about";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";

import { Inter } from "next/font/google";
import Banner from "./components/Contact/Banner";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Carousel/>
      <About/>
      <Banner />
    </main>
  )
}