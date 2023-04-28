//SELECTOR DE CATEGORIAS
import { Button, Text } from "@chakra-ui/react"
import { useSelector, useDispatch} from "react-redux"
import { setCategoty } from "../redux/slices/productsSlice"
import GenericBox from "./styles/GenericBox"

const CategoryBar = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)
    const categoryState = useSelector(state => state.products.category)

    //SE FILTRAN LAS CATEGORIAS CON SET PARA QUE NO SE REPITAN
    const categories = [...new Set(products.map(product => product.category))]

  return <GenericBox direction="column">
        <Text fontSize="2xl" fontWeight="bold">
            Search by category:
        </Text>
        <GenericBox>
        {
            categories.map(category => <Button
            key={category}
            onClick={()=>dispatch(setCategoty(category))}
            colorScheme={categoryState === category ? 'blue' : 'gray'}
            >{category}</Button>)
        }
        </GenericBox>
   </GenericBox>
}

export default CategoryBar