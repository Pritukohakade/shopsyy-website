
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'
import banner from './assets/banner.jpg'
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kids" element={<ShopCategory  banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
