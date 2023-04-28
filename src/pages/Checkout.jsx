import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"
import { Heading, Text } from "@chakra-ui/react"
import CheckoutModal from "../components/styles/CheckoutModal"

const Checkout = () => {

  const cart = useSelector(state => state.products.cart)
  const total = useSelector(state => state.products.totalCartPrice)
  const totalItems = useSelector(state => state.products.totalCartItems)

  const shipping = totalItems > 5 ? 5 : 10

  return <GenericBox direction="column" bg="gray.200" w="30vw" p="2rem">
    <Heading>Checkout</Heading>
    <GenericBox direction="column">
      {cart.map(product => <Text key={product.id}>{product.title}</Text>)}
      <GenericBox direction="column">
        <Text>Shipping: ${shipping}</Text>
        <Text>Subtotal: ${total}</Text>
        <Text>Total: ${total + shipping}</Text>
        {/* Hay que usar un modal aca */}
        <CheckoutModal/>
      </GenericBox>
    </GenericBox>
  </GenericBox>
}

export default Checkout