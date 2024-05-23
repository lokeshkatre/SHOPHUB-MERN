import React from 'react'
import './hero.css';
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero-image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW LAUNCH ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Lastest Collection <img src={arrow_icon} alt="" /></div>
        </div>
      </div>
      <div className="hero-right">
            <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
