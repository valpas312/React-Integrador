import { Box, Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"

const Profile = () => {

  const user = useSelector((state) => state.user.user)
  const orders = useSelector((state) => state.user.orders)

  const { username, email } = user

  console.log(orders)

  return <GenericBox>
    <Heading>Profile</Heading>
    <Box>
      <Text>Name: {username}</Text>
      <Text>Email: {email}</Text>
      <Text>Orders: { orders === undefined ? "No orders yet" : orders.length }</Text>
      </Box>
  </GenericBox>
}

export default Profile