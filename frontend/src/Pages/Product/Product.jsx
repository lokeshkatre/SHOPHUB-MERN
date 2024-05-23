import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/RelatedProducts.jsx/RelatedProducts';
import { ShopContext } from '../../Contex/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { allProduct } = useContext(ShopContext); 
  const product = allProduct.find((product) => product.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
