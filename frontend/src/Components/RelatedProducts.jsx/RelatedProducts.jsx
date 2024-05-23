import React from 'react'
import './relatedProducts.css'
import data_product from '../Assets/popular'
import Items from '../Items/Items'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
