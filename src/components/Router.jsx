import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import Products from './Products'

const Router = () => {
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/cart" element={<h1>Cart</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default Router