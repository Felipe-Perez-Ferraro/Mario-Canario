import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Cart({ yerba, price, img, quantity }) {
  const trash = <FontAwesomeIcon icon={faTrash} />;
  return (
    <>
      <article className="flex items-center gap-2 py-3 pr-3 justify-between border-slate-950 border-b">
        <img src={img} className="w-12" />
        <p>{yerba}</p>
        <p>${price}</p>
        <button type="button">+</button>
        <p>{quantity}</p>
        <button type="button">-</button>
        <button type="button">{trash}</button>
      </article>
    </>
  );
}

export default Cart;
