import {
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
    Image,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import GenericCard from "./styles/GenericCard";

const RecommendedCard = ({...props}) => {

    // eslint-disable-next-line react/prop-types
    const { title, price, image } = props

  return (
    <GenericCard minW="200px" maxW="20vw">
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody display="flex" flexDirection="column" gap="1em">
        <Heading size="sm">${price}</Heading>
        <Image src={image} alt={title} w="30%" m="0 auto" />
      </CardBody>
      <CardFooter m="0 auto">
        <Button as={Link} to={`/products/${title}`} variant="solid" bg="gray.300" >View here</Button>
      </CardFooter>
    </GenericCard>
  );
};

export default RecommendedCard;
