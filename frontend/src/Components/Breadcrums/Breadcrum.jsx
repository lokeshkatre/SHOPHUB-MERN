import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assets/breadcrum_image.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div>
      <div className="breadcrum">
        Home <img src={arrow_icon} alt="" />
        Shop<img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        {product.name}
      </div>
    </div>
  )
}

export default Breadcrum
