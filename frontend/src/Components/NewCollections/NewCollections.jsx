import React, { useEffect, useState } from 'react';
import './newCollections.css';
import Items from '../Items/Items';
import all_products from "../Assets/all_products.js"
import { BASE_URL } from '../../Contex/utils.js';
const _ = require('lodash');

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/newcollections`)
      .then(response => response.json()) // Return the JSON response
      .then(data => {
        setNewCollection(data);
      })
      .catch(error => {
        console.error('Error fetching new collections:', error);
      });
  }, []);
    const searchById = (id) => {
        return _.find(all_products, { id: id });
    };

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="new-collections-items">
        {newCollection && newCollection.length > 0 ? (
          newCollection.map((item, i) => (
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
          <p>Loading.........</p>
        )}
      </div>
    </div>
  );
};

export default NewCollections;
