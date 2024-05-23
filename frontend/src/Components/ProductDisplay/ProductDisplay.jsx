import React, { useContext } from 'react'
import './productDisplay.css'
import dull_star_icon from '../Assets/dull_star.png'
import star_icon from '../Assets/star.png'
import { ShopContext } from '../../Contex/ShopContext'
import all_products from '../Assets/all_products'
const _ = require('lodash');

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext)

  const searchById = (id) => {
    return _.find(all_products, { id: id });
  };


  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={searchById(product.id).image} alt="" />
          <img src={searchById(product.id).image} alt="" />
          <img src={searchById(product.id).image} alt="" />
          <img src={searchById(product.id).image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={searchById(product.id).image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={dull_star_icon} alt="" />
          <img src={dull_star_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          our classic Cotton Shirt, a timeless
          addition to your wardrobe crafted with comfort and style in mind.
          Made from 100% premium cotton, this shirt offers  
          unbeatable softness and breathability, ensuring you stay cool
          and comfortable all day long.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XLL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay