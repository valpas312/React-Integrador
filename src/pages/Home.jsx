import { Box, Spinner } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hooks/useAxios"
import { useDispatch } from "react-redux"
import { setProducts } from "../redux/slices/productsSlice"
import Recommended from "../components/Recommended"
import CategoryBar from "../components/CategoryBar"
import Categories from "../components/Categories"

const Home = () => {

  const { data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      useAxios.get("/products")
  })

  const dispatch = useDispatch()

  data && dispatch(setProducts(data.data))

  return <Box
    h="100%"
    w="100%"
    textAlign="center"
  >
    {
      isFetching
        ? <Spinner size="xl" />
        : <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            gap="3rem"
        >
          <Recommended />
          <CategoryBar />
          <Categories />
        </Box>
    }
  </Box>
}

export default Home