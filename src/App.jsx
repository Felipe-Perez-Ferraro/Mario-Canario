import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Market from './components/Market';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const createCart = (product) => {
    const prodId = cart.findIndex((item) => item.id === product.id);
    if (prodId === -1) {
      setCart([
        ...cart,
        {
          id: product.id,
          yerba: product.yerba,
          price: product.price,
          img: product.img,
          quantity: 1,
        },
      ]);
    } else {
      const updateQuantity = [...cart];
      updateQuantity[prodId].quantity += 1;
      setCart(updateQuantity);
    }
  };
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }
  const handleOpenCartClick = () => {
    setOpenCart(!openCart);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar
            cart={cart}
            handleOpencartClick={handleOpenCartClick}
            openCart={openCart}
          />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: '/market',
      element: (
        <>
          <Navbar cart={cart} handleOpencartClick={handleOpenCartClick} />
          <Market
            cart={cart}
            createCart={createCart}
            openCart={openCart}
            handleOpencartClick={handleOpenCartClick}
            removeFromCart={removeFromCart}
          />
          <Footer />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
