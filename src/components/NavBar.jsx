import { ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { TbShoppingCartPlus, TbShoppingCart } from 'react-icons/tb'
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/userSlice'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.products.cart)

  const cartIcon = cart.length > 0 ? <TbShoppingCartPlus/> : <TbShoppingCart/>
  
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
  {
    user.user?.username ? (<>
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
    <Button as={Link} to="/cart" variant="outline" rightIcon={cartIcon} colorScheme="blue">
        Cart
    </Button>
    <Button as={Link} to="/profile" variant="outline" colorScheme="blue">
        <CgProfile/>
        Profile
    </Button>
    </>)
    : (null)
  }
  </ButtonGroup>
}

export default NavBar