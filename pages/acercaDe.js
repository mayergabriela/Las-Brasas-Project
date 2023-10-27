/***** COMPONENTS  *****/
import React from "react";
import About from "../components/about/about";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";

const AcercaDe = () => {
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

export default AcercaDe;
