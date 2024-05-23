import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop/Shop.jsx'
import ShopCatagory from './Pages/ShopCatagory/ShopCatagory.jsx';
import Product from './Pages/Product/Product.jsx';
import LoginSignUp from './Pages/Login/LoginSignUp.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_men.jpg'
import women_banner from './Components/Assets/banner_women.jpg'
import kids_banner from './Components/Assets/banner_kids.jpg'
import Cart from './Pages/Cart/Cart.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCatagory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCatagory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCatagory banner={kids_banner} category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element = {<Product/>}/>
          </Route>
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
