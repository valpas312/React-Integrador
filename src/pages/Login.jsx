import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
        navigate('/')
    };

  return <FormControl as="form" onSubmit={handleSubmit}>
    <Heading as="h1" size="lg" mb="2">Login</Heading>
    <FormLabel>Username</FormLabel>
    <Input type="text" id="username" placeholder="Enter username" mb="2" />
    <FormLabel>Email address</FormLabel>
    <Input type="email" id="email" placeholder="Enter email" mb="2" />
    <FormLabel>Password</FormLabel>
    <Input type="password" id="password" placeholder="Password" mb="2" />

    <Button colorScheme="blue" type="submit" mb="2">Submit</Button>
    <Button colorScheme="blue" type="submit" variant="outline">Register</Button>
  </FormControl>
}

export default Login