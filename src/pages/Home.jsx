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
    display="flex"
    justifyContent="center"
    alignItems="center"
    h="100%"
    w="100%"
    flexDirection="column"
    gap="1rem"
  >
    {
       isFetching ? <Spinner /> : (<Box w="90%">
        <Recommended />
        <CategoryBar/>
        <Categories/>
      </Box>
       )
    }
  </Box>
}

export default Home