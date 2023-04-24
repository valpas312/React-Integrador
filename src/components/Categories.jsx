import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const Categories = () => {

  const products = useSelector(state => state.products.products)
  const category = useSelector(state => state.products.category)

  const filteredProducts = products.filter(product => product.category === category)

  console.log(filteredProducts)

  return <Box>
    {
      filteredProducts.map(product => <p key={product.id}>{product.title}</p>)
    }
  </Box>
}

export default Categories