import GenericBox from "./styles/GenericBox"
import { useSelector } from "react-redux"
import GenericCard from "./styles/GenericCard"
import { Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Orders = () => {

  const orders = useSelector((state) => state.user.orders)

  return <GenericBox>
  {orders.map(order => <GenericCard key={order.id}>
    <Text fontWeight="bold">Order ID: {order.id}</Text>
    <Text>Order Date: {order.date}</Text>
    <Text>Order Items: {order.cart.length}</Text>
    <Text fontWeight="bold">Order Total: ${order.total}</Text>
    <Button as={Link} to={`/order/${order.id}`} >View Order</Button>
    { console.log(order)}
  </GenericCard>)}
  </GenericBox>
}

export default Orders