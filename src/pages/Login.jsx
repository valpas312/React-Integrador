import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertLoginRegister from "../components/styles/AlertLoginRegister";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(login(user));
    navigate("/");
  };

  return (
    <FormControl
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
    gap="1rem"
    >
      <Heading as="h1" size="lg" mb="2">
        Log In
      </Heading>
      <FormLabel>Username</FormLabel>
      <Input required type="text" id="username" placeholder="Enter username" mb="2" />
      <FormLabel>Email address</FormLabel>
      <Input required type="email" id="email" placeholder="Enter email" mb="2" />
      <FormLabel>Password</FormLabel>
      <Input required type="password" id="password" placeholder="Password" mb="2" />

      <Button colorScheme="blue" type="submit" mb="2">
        Log In
      </Button>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <FormLabel>Don't have an account?</FormLabel>
      <Button colorScheme="blue" variant="outline" as={Link} to="/register" >
        Register
      </Button>
      <Alert status="info" >
        <AlertIcon/>
        <AlertLoginRegister/>
      </Alert>
    </FormControl>
  );
};

export default Login;
