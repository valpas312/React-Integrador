import { Box, Spinner } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hooks/useAxios"
import { useDispatch } from "react-redux"
import { setProducts } from "../redux/slices/productsSlice"
import Recommended from "../components/Recommended"
import CategoryBar from "../components/CategoryBar"
import Categories from "../components/Categories"
import GenericBox from "../components/styles/GenericBox"

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
        : <GenericBox direction="column">
          <Recommended />
          <CategoryBar />
          <Categories />
        </GenericBox>
    }
  </Box>
}

export default Home