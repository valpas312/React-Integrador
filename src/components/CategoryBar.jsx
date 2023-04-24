import { Button, ButtonGroup } from "@chakra-ui/react"
import { useSelector, useDispatch} from "react-redux"
import { setCategoty } from "../redux/slices/productsSlice"

const CategoryBar = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.products)

    const categories = [...new Set(products.map(product => product.category))]

  return <ButtonGroup w="100%">
        {
            categories.map(category => <Button key={category} onClick={()=>dispatch(setCategoty(category))}>{category}</Button>)
        }
   </ButtonGroup>
}

export default CategoryBar