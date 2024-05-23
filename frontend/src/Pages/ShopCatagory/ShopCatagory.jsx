import React, { useContext, useEffect, useState } from 'react';
import './shopCatagory.css';
import { ShopContext } from '../../Contex/ShopContext';
import dropdown_icon from '../../Components/Assets/dropdown_image.png';
import Items from '../../Components/Items/Items';
import all_products from '../../Components/Assets/all_products';

const _ = require('lodash');


const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext); // Updated to match context naming
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProduct && allProduct.length > 0) {
      setLoading(false);
    }
  }, [allProduct]);

  const searchById = (id) =>{
    return _.find(all_products,{id:id});
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="dropdown-icon">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown" />
        </div>
      </div>
          
      <div className="shopcategory-products">
        {loading ? (
          <p>Loading products...</p> // Show loading message if products are not loaded yet
        ) : (
          allProduct.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Items 
                  key={i} 
                  id={item.id} 
                  name={item.name} 
                  category={item.category} 
                  image={searchById(item.id).image} 
                  new_price={item.new_price} 
                  old_price={item.old_price}
                />
              );
            }
            return null; // Return null instead of an empty string
          })
        )}
      </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
