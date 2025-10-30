import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import BredCrums from '../components/BredCrums/BredCrums';
import Description from '../components/Description/Description';
import RelatedProduct from '../components/Relatedproducts/Relatedproduct';



const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
       <Bredcrums product={product}/>
       <ProductDisplay product={product}/>
       <Description/>
       <Relatedproduct/>
      
    </div>
  )
}

export default Product
