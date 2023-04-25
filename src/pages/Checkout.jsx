import { useSelector } from "react-redux"

const Checkout = () => {

  const cart = useSelector(state => state.products.cart)

  return <>
    {
      cart.length > 0
        ? <h1>Checkout</h1>
        : <h1>Cart is empty</h1>
    }
  </>
}

export default Checkout