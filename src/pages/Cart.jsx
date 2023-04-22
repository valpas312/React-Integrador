import { useSelector, useDispatch } from "react-redux"
import { Box, Button, ButtonGroup, Text} from "@chakra-ui/react"
import { removeProductFromCart, clearCart } from "../redux/slices/productsSlice"
import CartCard from "../components/CartCard"

const Cart = () => {

  const cart = useSelector((state) => state.products.cart)
  const dispatch = useDispatch()
  const total = useSelector((state) => state.products.totalCartPrice)

  return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    h="100%"
    flexWrap="wrap"
    gap="3rem"
  >
    {
      cart.length === 0 ? <h1>Cart is empty</h1> :
      cart.map(product => {
        return <CartCard
          key={product.id}
          {...product}
          handleRemoveFromCart={() => dispatch(removeProductFromCart(product))}
        />
      } ) 
    }
    <ButtonGroup spacing="2">
      <Button colorScheme="blue">Checkout</Button>
      <Button colorScheme="red" onClick={() => dispatch(clearCart())}>Clear cart</Button>
    </ButtonGroup>
    <Text>Total: ${total}</Text>
  </Box>
}

export default Cart