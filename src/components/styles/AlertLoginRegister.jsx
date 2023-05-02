import {
    Box,
    Button,
    CloseButton,
    Slide,
    Text,
    useDisclosure
} from '@chakra-ui/react'

const AlertLoginRegister = () => {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <Box m="0 auto">
        <Button onClick={onToggle}>Important Info</Button>
        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
          <CloseButton onClick={onToggle} />
            <Text>Keep in mind the login is just temporary, it exists only in localstorage and when you log out all the data will be deleted</Text>
            <Text>Tengan en cuenta que el inicio de sesión es solo temporal, existe solo en el almacenamiento local y cuando cierre sesión, todos los datos se eliminarán</Text>
          </Box>
        </Slide>
      </Box>
    )
  }

export default AlertLoginRegister