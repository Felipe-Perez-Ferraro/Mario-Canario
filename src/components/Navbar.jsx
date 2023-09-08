import React from 'react';
import { NavLink } from 'react-router-dom';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linkStyle, screenStyle } from '../tailwindStyles';
import Cart from './Cart';

function Navbar({ cart, handleOpencartClick, openCart, addQty, restQty, removeFromCart }) {
  const bag = <FontAwesomeIcon icon={faBagShopping} />;

  return (
    <section className="bg-green-950">
      <header
        className={`${screenStyle} flex items-center justify-between h-16`}
      >
        <h1 className="font-bold text-yellow-500 text-xl">Canarias Mario</h1>
        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <NavLink className={linkStyle} to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={linkStyle}
                to="/market"
                activeclassname="activeLink"
              >
                Comprar
              </NavLink>
            </li>
            <li
              className="cursor-pointer flex items-center gap-1 text-lg text-slate-50 hover:text-red-600"
              onClick={handleOpencartClick}
            >
              {bag}
              <span className="text-xs bg-red-600 text-slate-50 rounded-md p-1 text-center">
                {cart.length}
              </span>
            </li>
            {openCart && (
              <section className="absolute top-0 right-0 h-full w-11/12 bg-slate-50">
                <div className="flex items-center border-slate-950 border-b bg-slate-950 h-16">
                  <button
                    className="text-left text-slate-50 p-2 text-xl font-bold"
                    type="button"
                    onClick={handleOpencartClick}
                  >
                    X
                  </button>
                  <h2 className="text-2xl text-slate-50 font-bold">Carrito</h2>
                </div>
                {cart.length === 0 && (
                  <p className="py-2 px-1 font-medium">No hay ningun producto todavía.</p>
                )}
                {cart.map((product) => (
                  <Cart
                  key={product.id}
                  id={product.id}
                  yerba={product.yerba}
                  price={product.price}
                  img={product.img}
                  quantity={product.quantity}
                  removeFromCart={removeFromCart}
                  cart={cart}
                  addQty={addQty}
                  restQty={restQty}
                  />
                ))}
              </section>
            )}
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
