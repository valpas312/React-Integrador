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

import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/productsSlice";
import { Link } from "react-router-dom";

const ProductsCard = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { title, description, price, image} = props;

    const dispatch = useDispatch();

    const toast = useToast();

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
    <Card minW="300px" maxW="25vw" h="100%" shadow="md" _hover={{shadow:"xl"}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' bg="#f1f1f1">
      <CardBody>
        <Image src={image} alt={title} w="30%" m="0 auto"/>
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
          <Button variant="solid" colorScheme="blue" as={Link} to={`/products/${title}`} >
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={() => handleAddToCart(props)}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
