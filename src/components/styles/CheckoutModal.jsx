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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setShippingAddress } from "../../redux/slices/userSlice";

import { useRef } from "react";

const CheckoutModal = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const shippingAddress = {
      city: e.target.city.value,
      address: e.target.address.value,
    };
    dispatch(setShippingAddress(shippingAddress));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Button onClick={onOpen}>Add shipping address</Button>
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
              <Input placeholder="City" id="city" />
              <FormLabel>Address</FormLabel>
              <Input placeholder="Address" id="address" />
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

export default CheckoutModal;
