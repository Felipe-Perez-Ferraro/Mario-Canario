import React, { useState } from 'react';
import yerbas from '../arrayYerbas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { screenStyle } from '../tailwindStyles';
import MarketCard from './MarketCard';
import Cart from './Cart';

function Market({ createCart, cart, openCart, handleOpencartClick }) {
  const [yerbaArr, setYerbaArr] = useState([]);
  const [open, setOpen] = useState(false);
  const filter = <FontAwesomeIcon icon={faFilter} />;

  const handleChange = (gr, checkbox) => {
    if (checkbox.checked) {
      const yerbafilter = yerbas.filter((yerba) => yerba.g === Number(gr));
      setYerbaArr(yerbafilter);
    } else {
      setYerbaArr(yerbas);
    }
  };
  const handleCheckboxClick = (e) => {
    handleChange(e.target.name, e.target);
  };
  const handleFilterClick = () => {
    setOpen(!open);
  };

  return (
    <section className="bg-green-950 py-9">
      <article className={`${screenStyle}`}>
        <h2 className="text-3xl text-red-600 font-bold mb-3">Yerbas</h2>
        <button
          onClick={handleFilterClick}
          className="text-xl text-slate-50 mb-1"
          type="button"
        >
          {filter} Filtros
        </button>
        {open && (
          <div className="mb-6">
            <h4 className="text-lg text-red-600 font-medium">Por gramos:</h4>
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              name="500"
              id=""
            />
            <label className="mr-3 ml-1 text-slate-50" htmlFor="500">
              500gr
            </label>
            <input
              onChange={handleCheckboxClick}
              type="checkbox"
              name="1000"
              id=""
            />
            <label className="mr-3 ml-1 text-slate-50" htmlFor="1000">
              1000gr
            </label>
          </div>
        )}
        <div className="grid grid-cols-1 gap-4">
          <MarketCard createCart={createCart} yerbaArr={yerbaArr} />
        </div>
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
              <p className="py-2">No hay ningun producto todavía</p>
            )}
            {cart.map((product) => (
              <Cart
                key={product.id}
                id={product.id}
                yerba={product.yerba}
                price={product.price}
                img={product.img}
                quantity={product.quantity}
              />
            ))}
          </section>
        )}
      </article>
    </section>
  );
}

export default Market;
