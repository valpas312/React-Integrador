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
    <Card minW="300px" maxWidth="20vw" >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Heading size="sm">${price}</Heading>
        <Image src={image} alt={title} w="50%" />
      </CardBody>
      <CardFooter>
        <Button as={Link} to={`/products/${title}`} >View here</Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendedCard;
