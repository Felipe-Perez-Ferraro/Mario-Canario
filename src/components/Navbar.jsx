import React from 'react';
import { NavLink } from 'react-router-dom';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linkStyle, screenStyle } from '../tailwindStyles';

function Navbar() {
  const bag = <FontAwesomeIcon icon={faBagShopping} />;

  return (
    <section className="bg-yellow-400">
      <header
        className={`${screenStyle} flex items-center justify-between h-16`}
      >
        <h1 className="font-bold text-green-950 text-xl">Canarias Mario</h1>
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
            <li className={linkStyle}>{bag}</li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
