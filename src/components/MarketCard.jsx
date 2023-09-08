import { faBasketShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import yerbas from '../arrayYerbas';
import Swal from 'sweetalert2';

function MarketCard({ yerbaArr, createCart }) {
  const watch = <FontAwesomeIcon icon={faEye} />;
  const shopping = <FontAwesomeIcon icon={faBasketShopping} />;
  const handleAddCart = (product) => {
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      background: '#052e16',
    });
    createCart(product);
  };
  return (
    <>
      {yerbaArr.length > 0
        ? yerbaArr.map((yerba) => (
            <div
              className="border border-slate-50 bg-slate-200 rounded-sm flex p-2 flex-col items-center"
              key={yerba.id}
            >
              <h3 className="text-xl font-semibold text-green-950">
                {yerba.yerba}
              </h3>
              <img className="w-50" src={yerba.img} />
              <p className="text-xl text-green-950 font-semibold">
                Precio: ${yerba.price}
              </p>
              <p className="text-green-950 font-medium text-lg">
                Stock: {yerba.stock}
              </p>
              <p className="text-green-950 font-medium text-lg mb-3">
                Sabor: {yerba.type}
              </p>
              <div className="flex gap-7">
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50 hover:bg-red-800"
                  type="button"
                >
                  {watch}
                </button>
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50 hover:bg-red-800"
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
              className="border border-slate-50 bg-slate-200 rounded-sm flex p-2 flex-col items-center"
              key={yerba.id}
            >
              <h3 className="text-xl font-semibold text-green-950">
                {yerba.yerba}
              </h3>
              <img className="w-50" src={yerba.img} />
              <p className="text-xl text-green-950 font-semibold">
                Precio: ${yerba.price}
              </p>
              <p className="text-green-950 font-medium text-lg">
                Stock: {yerba.stock}
              </p>
              <p className="text-green-950 font-medium text-lg mb-3">
                Sabor: {yerba.type}
              </p>
              <div className="flex gap-7">
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50 hover:bg-red-800"
                  type="button"
                >
                  {watch}
                </button>
                <button
                  className="bg-red-600 px-7 py-1 text-xl rounded-sm text-slate-50 hover:bg-red-800"
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
