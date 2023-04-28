//MODAL DE CHAKRA UI PARA LAS IMAGENES DE TODAS LAS CARDS
import { useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const CardModal = ({ image, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen} w="100%" h="100%" _hover="none" bg="none">
        <Image src={image} alt={title} w="30%" m="0 auto" />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={image} alt={title} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CardModal;
