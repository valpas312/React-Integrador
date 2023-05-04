import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import Products from '../pages/Products'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import useElement from '../hooks/useElement'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Order from '../pages/Order'

const Router = () => {
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={useElement(<Home/>, <Login/>)} />
      <Route path="/products" element={useElement(<Products/>, <Login/>)} />
      <Route path="/products/:productTitle" element={useElement(<Product/>, <Login/>)}/>
      <Route path="/cart" element={useElement(<Cart/>, <Login/>)} />
      <Route path="/checkout" element={useElement(<Checkout/>, <Login/>)} />
      <Route path="/order/:orderId" element={useElement(<Order/>, <Login/>)} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/profile" element={useElement(<Profile/>, <Login/>)} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default Router