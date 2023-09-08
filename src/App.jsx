import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Market from './components/Market';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState(() => {
    const storedData = localStorage.getItem('Cart');
    return storedData ? JSON.parse(storedData) : [];
  });
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
      ],
      );
    } else {
      const updateQuantity = [...cart];
      updateQuantity[prodId].quantity += 1;
      setCart(updateQuantity);
    }
  };
  const addQty = (id) => {
    const updateQuantity = [...cart];
    updateQuantity[id].quantity += 1;
    setCart(updateQuantity);
  };
  const restQty = (id) => {
    const updateQuantity = [...cart];
    updateQuantity[id].quantity -= 1;
    setCart(updateQuantity);
  }
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updatedCart.forEach((el) => {
      el.id > 1 ? cart[id] = el.id-- : el.id = 0; 
    })
    setCart(updatedCart);
  }
  const handleOpenCartClick = () => {
    setOpenCart(!openCart);
  };
  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cart));
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar
            cart={cart}
            createCart={createCart}
            openCart={openCart}
            handleOpencartClick={handleOpenCartClick}
            removeFromCart={removeFromCart}
            addQty={addQty}
            restQty={restQty}
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
            addQty={addQty}
            restQty={restQty}
          />
          <Footer />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
