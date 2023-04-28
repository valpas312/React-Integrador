import { Box, Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import GenericBox from "../components/styles/GenericBox"

const Profile = () => {

  const user = useSelector((state) => state.user.user)

  const { username, email } = user

  return <GenericBox>
    <Heading>Profile</Heading>
    <Box>
      <Text>Name: {username}</Text>
      <Text>Email: {email}</Text>
      </Box>
  </GenericBox>
}

export default Profile