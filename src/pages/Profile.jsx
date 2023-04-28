import { Box, Heading, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const Profile = () => {

  const user = useSelector((state) => state.user.user)

  const { username, email } = user

  return <Box>
    <Heading>Profile</Heading>
    <Box>
      <Text>Name: {username}</Text>
      <Text>Email: {email}</Text>
      </Box>
  </Box>
}

export default Profile