import { Box, Text } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hooks/useAxios"
import { useDispatch } from "react-redux"
import { setProducts } from "../redux/slices/productsSlice"

const Home = () => {

  const { data} = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      useAxios.get("/products")
  })

  const dispatch = useDispatch()

  data && dispatch(setProducts(data.data))

  return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    h="100%"
  >
    <Text>Home</Text>
  </Box>
}

export default Home