import React from 'react'
import './descriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>Dive into a world of endless possibilities as you explore our vast collection of products
          spanning across various categories.
          Discover the latest trends in fashion with our extensive range of clothing, shoes, and accessories,
          curated to cater to every style and occasion. From casual wear to formal attire, we've got you covered.
        </p>
        <p>
          For the little ones, explore our kid's section filled with toys, games, clothing, and essentials to keep
          them entertained and comfortable.
          Shopping with us is not just about convenience—it's an experience. Our user-friendly interface makes browsing and purchasing a breeze,
          while secure payment options ensure a safe and seamless transaction every time.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
