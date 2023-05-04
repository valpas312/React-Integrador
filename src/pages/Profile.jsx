import {Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"
import Orders from "../components/Orders"

const Profile = () => {

  const user = useSelector((state) => state.user.user)

  const { username, email } = user

  return <GenericBox direction="column">
    <GenericBox direction="column">
    <GenericBox direction="column">
      <Heading>Account Details</Heading>
      <Text>Name: {username}</Text>
      <Text>Email: {email}</Text>
    </GenericBox>
    <GenericBox direction="column">
      <Heading>Orders</Heading>
      <Orders/>
      </GenericBox>
      </GenericBox>
  </GenericBox>
}

export default Profile