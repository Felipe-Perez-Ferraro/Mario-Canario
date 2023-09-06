import React, { useState } from 'react';
import yerbas from '../arrayYerbas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBasketShopping,
  faEye,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { screenStyle } from '../tailwindStyles';

function Market() {
  const watch = <FontAwesomeIcon icon={faEye} />;
  const shopping = <FontAwesomeIcon icon={faBasketShopping} />;
  const filter = <FontAwesomeIcon icon={faFilter} />;
  const [yerbaArr, setYerbaArr] = useState([]);
  const [open, setOpen] = useState(false);

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
                    >
                      {shopping}
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </article>
    </section>
  );
}

export default Market;
