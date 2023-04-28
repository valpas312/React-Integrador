import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addProductToCart } from "../redux/slices/productsSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const toast = useToast();

  const products = useSelector((state) => state.products.products);

  const { productTitle } = useParams();

  const productData = products.find(
    (product) => product.title.trim() === productTitle.trim()
  );

  const dispatch = useDispatch();
  
  const { title, price, description, image, id } = productData;
  const handleAddToCart = () => {
    dispatch(addProductToCart(productData));
    toast({
      title: "Product added.",
      description: "We've added the product to your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2rem"
      key={id}
    >
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="2.5rem"
        w="70%"
      >
        <Image src={image} alt={title} w="15%" />
        <Text fontSize="xl" fontWeight="bold">
          ${price}
        </Text>
        <Text fontSize="md">
          {description}
        </Text>
        <Button colorScheme="teal" size="lg" onClick={() => handleAddToCart()}>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
