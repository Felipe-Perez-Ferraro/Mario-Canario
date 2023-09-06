import React from 'react';
import { NavLink } from 'react-router-dom';
import { buttonStyle, screenStyle } from '../tailwindStyles';

function Home() {
  return (
    <main className="bg-green-950 flex items-center">
      <article className={`${screenStyle} py-11 flex flex-col gap-3`}>
        <h2 className="text-slate-50 text-4xl font-extrabold text-center">
          Canarias Mario
        </h2>
        <p className="text-slate-50 text-lg font-medium text-center">
          Comprá yerba Canarias de manera Minorista y Mayorista al mejor precio
          posible!
        </p>

        <p className="text-slate-50 text-xl font-medium text-center mb-4">
          Qué estás esperando?
        </p>
        <button type="button">
          <NavLink className={buttonStyle} to="/market">
            COMPRAR AHORA
          </NavLink>
        </button>
      </article>
    </main>
  );
}

export default Home;
