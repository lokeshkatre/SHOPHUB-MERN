import React, { useEffect, useState } from 'react';
import './popular.css';
import Items from '../Items/Items.jsx';
import all_products from '../Assets/all_products.js';
import { BASE_URL } from '../../Contex/utils.js';
const _ = require('lodash');


const Popular = () => {
  const [popularInWomen, setPopularInWomen] = useState([]);

  const searchById = (id) => {
    return _.find(all_products, { id: id });
  };

  useEffect(() => {
    fetch(`${BASE_URL}/popularinwomen`)
      .then((response) => response.json())
      .then((data) => {
        setPopularInWomen(data);
      })
      .catch((error) => {
        console.error('Error fetching popular items:', error);
      });
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularInWomen && popularInWomen.length > 0 ? (
          popularInWomen.map((item, i) => (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              category={item.category}
              image={searchById(item.id).image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
