import { ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/userSlice'

const NavBar = () => {
  const dispatch = useDispatch()
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
    <Button variant="outline" colorScheme="red" onClick={() => dispatch(logout())}>
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
    <Button as={Link} to="/profile" variant="outline" colorScheme="blue">
        <CgProfile/>
        Profile
    </Button>
  </ButtonGroup>
}

export default NavBar