import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import CartaHeader from "./components/carta_online/cartaHeader";

export default function CartaOnline() {
  return (
    <main>
        <CartaHeader />
    </main>
  );
}
