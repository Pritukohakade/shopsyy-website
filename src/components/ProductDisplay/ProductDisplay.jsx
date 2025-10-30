import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = ({product}) => {
    const { addTocart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="product-img-list">
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
                <img src={product.image} alt="" height="150px"/>
                
            </div>
            <div className="productdisplay-img">
                <img  className='main-img' src={product.image} alt="" height="300px"/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="right-star">
                <img src={star_icon} alt="" height="20px"/>
                <img src={star_icon} alt="" height="20px"/>
                <img src={star_icon} alt="" height="20px"/>
                <img src={star_icon} alt="" height="20px"/>
                <img src={star_dull_icon} alt="" height="20px"/>
                <p>(130)</p>
            </div>
              
            <div className="right-prices">
                <div className="right-old-prices">
                    ${product.old_price}
                </div>
                <div className="right-new-prices">
                    ${product.new_price}
                </div>
                </div>
                <div className="right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo accusamus provident voluptas, amet ullam labore, repellat veritatis ratione facilis distinctio laboriosam, praesentium in nam? Dicta, recusandae sint! Iure, laboriosam debitis?
                </div>
                <div className="right-size">
                    <h1>Select Size</h1>
                    <div className="right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
                <div className="right-category">
                    <span>Category: <span>Women,T-Shirt,Crop Top</span></span>
                </div>
                <div className="right-category">
                    <span>Tags: <span>Modern,Latest,Trend Shorts</span></span>
                </div>
            
        </div>
      
    </div>
  )
}

export default ProductDisplay
