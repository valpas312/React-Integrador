import { ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

const NavBar = () => {
  return <ButtonGroup
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
    <Button as={Link} to="#" variant="outline" colorScheme="red">
        <AiOutlineArrowLeft/>
        Logout
    </Button>
    <Button as={Link} to="/products" variant="solid" leftIcon={<MdAttachMoney/>} colorScheme="blue">
        All Products
    </Button>
    <Button as={Link} to="/"  variant="ghost" colorScheme="blue">
        <AiOutlineHome/>
    </Button>
    <Button as={Link} to="/cart" variant="outline" rightIcon={<BsFillCartFill/>} colorScheme="blue">
        Cart
    </Button>
    <Button as={Link} to="#" variant="outline" colorScheme="blue">
        <CgProfile/>
        Profile
    </Button>
  </ButtonGroup>
}

export default NavBar