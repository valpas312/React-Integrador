import { useSelector, useDispatch } from "react-redux"
import { Box} from "@chakra-ui/react"
import { removeProductFromCart } from "../redux/slices/productsSlice"

const Cart = () => {

  const cart = useSelector((state) => state.products.cart)
  const dispatch = useDispatch()

  console.log(cart)

  return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    h="100%"
    flexWrap="wrap"
    gap="3rem"
  >
    {
      cart.map(product => {
        const { id, name, price, quantity } = product
        return <div key={id} >
          <h2>{name}</h2>
          <h3>{price}</h3>
          <h4>{quantity}</h4>
          <button onClick={() => dispatch(removeProductFromCart(product))}>Remove</button>
        </div>
      } ) 
    }
  </Box>
}

export default Cart