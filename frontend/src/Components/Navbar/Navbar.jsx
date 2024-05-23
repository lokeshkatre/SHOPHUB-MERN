import React, { useContext, useRef, useState } from 'react'; // Import React and useState once
import './navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.jpg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contex/ShopContext';
import nav_dropdown from '../Assets/dropdown_image.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPHUB</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li className={activeMenu === "shop" ? "active" : ""} onClick={() => setActiveMenu("shop")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/' >Shop</Link> {activeMenu === "shop" ? <hr /> : <></>}
        </li>
        <li className={activeMenu === "men" ? "active" : ""} onClick={() => setActiveMenu("men")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/men'>Men</Link> {activeMenu === "men" ? <hr /> : <></>}
        </li>
        <li className={activeMenu === "women" ? "active" : ""} onClick={() => setActiveMenu("women")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/women'>Women </Link>{activeMenu === "women" ? <hr /> : <></>}
        </li>
        <li className={activeMenu === "kids" ? "active" : ""} onClick={() => setActiveMenu("kids")}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/kids'>Kids</Link> {activeMenu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => {
            localStorage.removeItem('auth-token');
            window.location.replace('/');
          }}>Logout</button>
        :<button>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/login'>Login</Link>
      </button>}
        
        <Link to='/cart'>
          <img src={cart} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
export default Navbar;
