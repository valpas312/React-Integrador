import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import { useDispatch} from "react-redux";
import { addProductToCart, removeProductFromCart } from "../redux/slices/productsSlice";

const CartCard = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { title, price, image, quantity } = props;

  const toast = useToast();

  const dispatch = useDispatch()

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
    <Card w="30vw" h="100%" shadow="md" textAlign="center">
      <CardBody>
        <Image src={image} alt={title} w="30%" margin="0 auto"/>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {quantity}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" margin="0 auto">
          <Button variant="solid" colorScheme="red" onClick={() => handleRemoveFromCart(props)}>
            Remove one item
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={() => handleAddToCart(props)} >
            Add one item
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CartCard;
