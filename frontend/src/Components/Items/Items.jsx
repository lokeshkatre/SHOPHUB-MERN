import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link> 
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="items-price-new">
            Rs.{props.new_price}
        </div>
        <div className="item-price-old">
            Rs.{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
