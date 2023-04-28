import {
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/productsSlice";
import { Link } from "react-router-dom";
import CardAccordion from "./styles/CardAccordion";
import CardModal from "./styles/CardModal";
import GenericCard from "./styles/GenericCard";

const ProductsCard = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { title, description, price, image} = props;

    const dispatch = useDispatch();

    //TOASYT DE CHAKRA UI
    const toast = useToast();

    //HANDLER PARA AGREGAR PRODUCTOS AL CARRITO
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
    <GenericCard>
      <CardBody>
        <CardModal image={image} title={title} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <CardAccordion description={description} />
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" as={Link} to={`/products/${title}`} >
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={() => handleAddToCart(props)}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </GenericCard>
  );
};

export default ProductsCard;
