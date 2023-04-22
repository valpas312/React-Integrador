import { ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'

const NavBar = () => {
  return <ButtonGroup
    w="100%"
    h="10vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bg="gray.200"
    boxShadow="md"
    position="sticky"
    top="0"
    zIndex="1"
    mb="2"
  >
    <Button as={Link} to="/products" variant="solid" leftIcon={<MdAttachMoney/>} colorScheme="blue">
        Products
    </Button>
    <Button as={Link} to="/"  variant="ghost" colorScheme="blue">
        <AiOutlineHome/>
    </Button>
    <Button as={Link} to="/cart" variant="outline" rightIcon={<BsFillCartFill/>} colorScheme="blue">
        Cart
    </Button>
  </ButtonGroup>
}

export default NavBar