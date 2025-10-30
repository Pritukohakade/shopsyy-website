import React, { useContext, useState } from 'react'
import "./Navbar.css"
import shoifyy from "../../assets/shoifyy.webp"
import cart_icon from "../../assets/cart_icon.webp"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'


const Navbar = () => {
  const[menu,setMenu] = useState("home");
  const{getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={shoifyy} alt="" height="60px" />
            <p>Shopify</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Home</Link>{menu === "home" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Men</Link>{menu === "men" ? <hr/>:<></>} </li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/womens">Women</Link>{menu === "women" ? <hr/>:<></>} </li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:"none",color:"#626262"}}to="/kids">Kids</Link>{menu === "kids" ? <hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="" height="50px" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>

        </div>
    
    </div>
  )
}

export default Navbar
