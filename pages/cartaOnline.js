/***** COMPONENTS  *****/
import CartaHeader from "./components/carta_online/cartaHeader";
import { ThemeContext } from "@/pages/context/ThemeContextProvider";
import { useContext } from "react";

export default function CartaOnline() {
  const data = useContext(ThemeContext);
  const [ theme ] = data;
  return (
    <main className={theme}>
      <CartaHeader />
    </main>
  );
}
