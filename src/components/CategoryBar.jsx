import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react"
import { useSelector, useDispatch} from "react-redux"
import { setCategoty } from "../redux/slices/productsSlice"

const CategoryBar = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)
    const categoryState = useSelector(state => state.products.category)

    const categories = [...new Set(products.map(product => product.category))]

  return <ButtonGroup
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="2rem"
        flexDirection="column"
  >
        <Text fontSize="2xl" fontWeight="bold">
            Search by category:
        </Text>
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="2rem"
        >
        {
            categories.map(category => <Button
            key={category}
            onClick={()=>dispatch(setCategoty(category))}
            colorScheme={categoryState === category ? 'blue' : 'gray'}
            >{category}</Button>)
        }
        </Box>
   </ButtonGroup>
}

export default CategoryBar