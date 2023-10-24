/***** COMPONENTS  *****/
import About from "./components/about/About";
import { ThemeContext } from "@/pages/context/ThemeContextProvider";
import { useContext } from "react";
import React from "react";

const acercaDe = () => {
  const data = useContext(ThemeContext);

  const [theme] = data;
  return (
    <main className={theme}>
      <div>
        <About />
      </div>
    </main>
  );
};

export default acercaDe;
