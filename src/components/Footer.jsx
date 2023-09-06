import React from 'react';
import { Link } from 'react-router-dom';
import { linkStyle, screenStyle } from '../tailwindStyles';

function Footer() {
  return (
    <footer className="bg-yellow-400">
      <section
        className={`${screenStyle} flex items-center justify-between h-20`}
      >
        <h2 className="font-extrabold text-green-950 text-lg">
          Canarias Mario
        </h2>
        <article>
          <ul>
            <li>
              <Link className={linkStyle} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={linkStyle} to="/market">
                Comprar
              </Link>
            </li>
          </ul>
        </article>
        <div>
          <ul>
            <li>
              <Link className={linkStyle} to="/questions">
                FAQ
              </Link>
            </li>
            <li>
              <Link className={linkStyle} to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
