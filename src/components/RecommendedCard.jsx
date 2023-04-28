import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
    Image,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const RecommendedCard = ({...props}) => {

    // eslint-disable-next-line react/prop-types
    const { title, price, image } = props

  return (
    <Card minW="250px" maxWidth="15vw" _hover={{shadow:"xl"}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' bg="#f1f1f1" >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" gap="1em">
        <Heading size="sm">${price}</Heading>
        <Image src={image} alt={title} w="40%" m="0 auto" />
      </CardBody>
      <CardFooter m="0 auto">
        <Button as={Link} to={`/products/${title}`} variant="solid" bg="gray.300" >View here</Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendedCard;
