/***** COMPONENTS  *****/
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import TakeawayBanner from "./components/Take away/TakeawayBanner";
import { ThemeContext } from "@/pages/context/ThemeContextProvider";
import { useContext } from "react";
import About from "./components/about/about";

export default function Home() {
  const data = useContext(ThemeContext);

  const [theme] = data;
  return (
    <main className={theme}>
      <Hero />
      <Carousel />
      <About/>
      <TakeawayBanner />
    </main>
  );
}
