import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Cart({
  id,
  yerba,
  price,
  img,
  quantity,
  cart,
  removeFromCart,
  addQty,
  restQty,
}) {
  const trash = <FontAwesomeIcon icon={faTrash} />;
  const handleAddQty = (id) => {
    addQty(id)
  };
  const handleRestQty = (id) => {
    if (quantity > 1) {
      restQty(id);
    } else {
      removeFromCart(id);
    }
  };
  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };
  return (
    <>
      <article className="flex items-center gap-2 py-3 pr-3 justify-between border-slate-950 border-b">
        <img src={img} className="w-12" />
        <p className="font-medium">{yerba}</p>
        <p>${price}</p>
        <button
          onClick={() => handleAddQty(id)}
          type="button"
          className="border border-slate-950 px-1"
        >
          +
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => handleRestQty(id)}
          type="button"
          className="border border-slate-950 px-1"
        >
          -
        </button>
        <button
          onClick={() => handleRemoveFromCart(id)}
          type="button"
          className="text-xs text-red-700"
        >
          {trash}
        </button>
      </article>
    </>
  );
}

export default Cart;
