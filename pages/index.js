
import { Inter } from "next/font/google";
import About from "./components/about/about";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main>
      <About/>
    </main>
  )
}