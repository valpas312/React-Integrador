import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import Products from '../pages/Products'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Router = () => {
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default Router