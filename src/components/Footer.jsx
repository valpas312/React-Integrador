import { Box, Text } from "@chakra-ui/react"

const Footer = () => {
  return <Box
    as="footer"
    w="100%"
    h="10vh"
    bg="gray.800"
    color="white"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Text>Footer</Text>
  </Box>
}

export default Footer