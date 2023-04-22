import { useParams } from 'react-router-dom'

const Product = () => {
    const { product } = useParams()
  return <>
    <h1>{product}</h1>
  </>
}

export default Product