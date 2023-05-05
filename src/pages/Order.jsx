import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"
import { Img, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import GenericCard from "../components/styles/GenericCard"

const Order = () => {

    const orders = useSelector((state) => state.user.orders)
    const shippingAddress = useSelector((state) => state.user.shippingAddress)

    const { city, address} = shippingAddress

    const { orderId } = useParams()

    const order = orders.find(order => order.id === orderId)

    const { id, date, cart, total } = order

  return <GenericBox>
    <GenericBox direction="column" >
        <Text fontWeight="bold">Order ID: {id}</Text>
        <Text>Order Date: {date}</Text>
        <Text>Order Items: {cart.length}</Text>
        <Text>Shipping Address: {city}, {address}</Text>
        <Text fontWeight="bold">Order Total: ${total}</Text>
        <GenericBox>
            {cart.map(item => <GenericCard display="flex" justifyContent="center" alignItems="center" key={item.id} >
                <Text fontWeight="bold">{item.title}</Text>
                <Img src={item.image} alt={item.title} w="30%" />
                <Text>Price: ${item.price}</Text>
                <Text>Quantity: {item.quantity}</Text>
            </GenericCard>)}
        </GenericBox>
    </GenericBox>
  </GenericBox>
}

export default Order