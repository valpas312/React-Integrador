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
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/productsSlice";

const ProductsCard = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { title, description, price, image} = props;

    const dispatch = useDispatch();

  return (
    <Card w="35vw" h="100%" shadow="md" >
      <CardBody>
        <Image src={image} alt={title} w="30%" align="center" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={() => dispatch(addProductToCart(props))}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
