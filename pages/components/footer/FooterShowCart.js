import { useCart } from "@/pages/hooks/useCart"

function FooterShowCart() {
    const { cart } = useCart()
  return (
    <footer className="footerShowCart">
      {
        JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}

export default FooterShowCart
