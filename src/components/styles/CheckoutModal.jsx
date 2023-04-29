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

import {v4} from 'uuid';

const CheckoutModal = () => {
    const id = v4()

    const dispatch = useDispatch()

    const cart = useSelector(state => state.products.cart)

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOnCLick = () => {
        dispatch(setOrder({id, cart}))
        onOpen()
    };
  return <>
  <Button onClick={() => handleOnCLick()} colorScheme="teal">Checkout</Button>

  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader> Successful purchase </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Your purchase id is: { id } </Text>
        <Text>You can see your orders on profile page</Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</>
}

export default CheckoutModal