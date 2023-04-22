import { ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'

const NavBar = () => {
  return <ButtonGroup
    w="100%"
    h="10vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    spacing="6"
  >
    <Button as={Link} to="/" variant="solid" leftIcon={<MdAttachMoney/>} colorScheme="blue">
        Products
    </Button>
    <Button as={Link} to="/cart" variant="outline" rightIcon={<BsFillCartFill/>} colorScheme="blue">
        Cart
    </Button>
  </ButtonGroup>
}

export default NavBar