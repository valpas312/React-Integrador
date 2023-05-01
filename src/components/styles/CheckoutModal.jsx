import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/slices/userSlice";
import { clearCart } from "../../redux/slices/productsSlice";
import { useNavigate } from "react-router-dom";
import FormatedDate from "../../utils/FormatedDate";

import {v4} from 'uuid';

const CheckoutModal = () => {
    const id = v4()

    const dispatch = useDispatch()

    const cart = useSelector(state => state.products.cart)

    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate()

    const handleOnCLick = () => {
        dispatch(setOrder({id, cart, date: FormatedDate(), total: cart.reduce((acc, curr) => acc + curr.price, 0)}))
        dispatch(clearCart())
        onOpen()
    };

    const handleOnClose = () => {
        onClose()
        navigate('/')
    };

  return <>
  <Button onClick={() => handleOnCLick()} colorScheme="teal">Checkout</Button>

  <Modal isOpen={isOpen} onClose={handleOnClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader> Successful purchase </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Your purchase id is: { id } </Text>
        <Text>You can see your orders on profile page</Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={handleOnClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</>
}

export default CheckoutModal