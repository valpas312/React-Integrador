//Modal de ChakraUI
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setShippingAddress } from "../../redux/slices/userSlice";

import { useRef } from "react";

const CheckoutModalAddress = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const shippingAddress = {
      city: e.target.city.value,
      address: e.target.address.value,
    };
    dispatch(setShippingAddress(shippingAddress));
    onClose();
    toast({
      title: "Shipping address added.",
      description: "We've added your shipping address for your next purchase.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Button onClick={onOpen} colorScheme="yellow">Add shipping address</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a shipping address</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl as="form" onSubmit={handleSubmit}>
              <FormLabel>City</FormLabel>
              <Input required placeholder="City" id="city" />
              <FormLabel>Address</FormLabel>
              <Input required placeholder="Address" id="address" />
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckoutModalAddress;
