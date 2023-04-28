import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"
import { Button, Heading, Text } from "@chakra-ui/react"

const Checkout = () => {

  const cart = useSelector(state => state.products.cart)
  const total = useSelector(state => state.products.totalCartPrice)
  const totalItems = useSelector(state => state.products.totalCartItems)

  const shipping = total % totalItems + 5

  return <GenericBox direction="column">
    <Heading>Checkout</Heading>
    <GenericBox direction="column">
      {cart.map(product => <Text key={product.id}>{product.title}</Text>)}
      <GenericBox direction="column">
        <Text>Total: ${total}</Text>
        <Text>Shipping: ${shipping}</Text>
        <Button colorScheme="teal">Checkout</Button>
      </GenericBox>
    </GenericBox>
  </GenericBox>
}

export default Checkout