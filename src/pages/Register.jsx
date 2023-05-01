import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    dispatch(login(user))
    navigate("/")
  };

  return <FormControl
  as="form"
  onSubmit={handleSubmit}
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  w="70vw"
  h="100%"
  mx="auto"
  maxW="500px"
  >
    <Heading as="h1" size="lg" mb="2">
      Register
    </Heading>
    <FormLabel>Username</FormLabel>
    <Input required type="text" id="username" placeholder="Enter username" mb="2" />
    <FormLabel>Email address</FormLabel>
    <Input required type="email" id="email" placeholder="Enter email" mb="2" />
    <FormLabel>Password</FormLabel>
    <Input required type="password" id="password" placeholder="Password" mb="2" />

    <Button colorScheme="blue" type="submit" mb="2">
      Register
    </Button>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <FormLabel>Have an account already?</FormLabel>
    <Button colorScheme="blue" variant="outline" as={Link} to="/login" >
      Log In
    </Button>
  </FormControl>
}

export default Register