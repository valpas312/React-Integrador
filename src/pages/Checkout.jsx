import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"
import { Heading, Text } from "@chakra-ui/react"
import CheckoutModalAddress from "../components/styles/CheckoutModalAddress"
import CheckoutModal from "../components/styles/CheckoutModal"
import { useMediaQuery } from "@chakra-ui/react"

const Checkout = () => {

  const [isLargerThan600] = useMediaQuery("(min-width: 600px)")

  const cart = useSelector(state => state.products.cart)
  const total = useSelector(state => state.products.totalCartPrice)
  const totalItems = useSelector(state => state.products.totalCartItems)
  const address = useSelector(state => state.user.shippingAddress)

  const shipping = totalItems > 5 ? 5 : 10

  console.log(address)

  return <GenericBox direction="column" bg="gray.200" p="2rem" w={isLargerThan600 ? "40vw" : "90vw"}>
    <Heading>Checkout</Heading>
    <GenericBox direction="column">
      {cart.map(product => <Text key={product.id}>{product.title}</Text>)}
      <GenericBox direction="column">
        <Text fontWeight="semibold" >Shipping: ${shipping}</Text>
        <Text fontWeight="semibold" >Subtotal: ${total}</Text>
        <Text fontWeight="semibold" >Total: ${total + shipping}</Text>
        {
          address === null ||  Object.keys(address).length === 0 ?
            <CheckoutModalAddress />
            : <CheckoutModal/>
        }
      </GenericBox>
    </GenericBox>
  </GenericBox>
}

export default Checkout