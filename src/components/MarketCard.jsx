import { faBasketShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import yerbas from '../arrayYerbas';

function MarketCard({ yerbaArr, createCart }) {
  const watch = <FontAwesomeIcon icon={faEye} />;
  const shopping = <FontAwesomeIcon icon={faBasketShopping} />;
  const handleAddCart = (product) => {
    createCart(product);
  };
  return (
    <>
      {yerbaArr.length > 0
        ? yerbaArr.map((yerba) => (
            <div
              className="border border-slate-50 bg-green-900 rounded-sm flex p-2 flex-col items-center"
              key={yerba.id}
            >
              <h3 className="text-xl font-semibold text-slate-50">
                {yerba.yerba}
              </h3>
              <img className="w-50" src={yerba.img} />
              <p className="text-xl text-slate-50 font-semibold">
                Precio: ${yerba.price}
              </p>
              <p className="text-slate-50 font-medium text-lg mb-3">
                Stock: {yerba.stock}
              </p>
              <div className="flex gap-7">
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50"
                  type="button"
                >
                  {watch}
                </button>
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50"
                  type="button"
                  onClick={() => handleAddCart(yerba)}
                >
                  {shopping}
                </button>
              </div>
            </div>
          ))
        : yerbas.map((yerba) => (
            <div
              className="border border-slate-50 bg-green-900 rounded-sm flex p-2 flex-col items-center"
              key={yerba.id}
            >
              <h3 className="text-xl font-semibold text-slate-50">
                {yerba.yerba}
              </h3>
              <img className="w-50" src={yerba.img} />
              <p className="text-xl text-slate-50 font-semibold">
                Precio: ${yerba.price}
              </p>
              <p className="text-slate-50 font-medium text-lg mb-3">
                Stock: {yerba.stock}
              </p>
              <div className="flex gap-7">
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50"
                  type="button"
                >
                  {watch}
                </button>
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50"
                  type="button"
                  onClick={() => handleAddCart(yerba)}
                >
                  {shopping}
                </button>
              </div>
            </div>
          ))}
    </>
  );
}

export default MarketCard;
