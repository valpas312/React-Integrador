import {Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"
import GenericCard from "../components/styles/GenericCard"

const Profile = () => {

  const user = useSelector((state) => state.user.user)
  const orders = useSelector((state) => state.user.orders)

  const { username, email } = user

  console.log(orders)

  return <GenericBox direction="column">
    <Heading>Profile</Heading>
    <GenericBox direction="column">
    <GenericBox direction="column">
      <Heading>Account Details</Heading>
      <Text>Name: {username}</Text>
      <Text>Email: {email}</Text>
    </GenericBox>
    <GenericBox direction="column">
      <Heading>Orders</Heading>
      <GenericBox direction="column">
        {orders.map(order => <GenericCard key={order.id}>
          <Text>Order ID: {order.id}</Text>
          <Text>Order Date: {order.date}</Text>
          <Text>Order Items: {order.cart.map(item => <Text key={item.title} >{item.title}</Text>)}</Text>
          <Text>Order Total: {order.total}</Text>
        </GenericCard>)}
        </GenericBox>
      </GenericBox>
      </GenericBox>
  </GenericBox>
}

export default Profile