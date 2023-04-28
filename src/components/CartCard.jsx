import {
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../redux/slices/productsSlice";
import GenericCard from "./styles/GenericCard";
import CardModal from "./styles/CardModal";

const CartCard = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { title, price, image, quantity } = props;

  //TOAST DE CHAKRA UI
  const toast = useToast();

  const dispatch = useDispatch();

  //HANDLERS PARA AGREGAR Y QUITAR PRODUCTOS DEL CARRITO
  const handleRemoveFromCart = (props) => {
    dispatch(removeProductFromCart(props));
    toast({
      title: `${title} removed from cart`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAddToCart = (props) => {
    dispatch(addProductToCart(props));
    toast({
      title: `${title} added to cart`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <GenericCard minW="200px" maxW="20vw">
      <CardBody>
        <CardModal image={image} title={title} />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{title}</Heading>
          <Text color="blue.600" fontSize="xl">
            ${price}
          </Text>
          <Text color="blue.600" fontSize="xl">
            {quantity}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          m="0 auto"
        >
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => handleRemoveFromCart(props)}
          >
            Remove one item
          </Button>
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => handleAddToCart(props)}
          >
            Add one item
          </Button>
        </ButtonGroup>
      </CardFooter>
    </GenericCard>
  );
};

export default CartCard;
