import { useMediaQuery } from '@chakra-ui/react'
import ClassicNav from './styles/ClassicNav'
import ResponsiveNav from './styles/ResponsiveNav'
import NavContent from './NavContent'

const NavBar = () => {

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  
  return <>
  {isLargerThan768 ? (
    <ClassicNav />
  ) : (
    <ResponsiveNav>
      <NavContent />
    </ResponsiveNav>
  )}
  </>
}

export default NavBar