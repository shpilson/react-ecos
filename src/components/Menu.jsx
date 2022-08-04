import { Link } from "react-router-dom";

import React from "react";
import "./Menu.scss";

const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div
        className="menu__content d-fl-col"
        // onClick={(e) => e.stopPropagation()}
      >
        <div className="logo__main d-fl">
          <Link to="/" className="d-fl">
            <div className="logo">
              <svg>
                <use xlinkHref="/sprite.svg#logo"></use>
              </svg>
            </div>
            <div className="logo__text d-fl-col">
              <h2>экология сервис</h2>
              <p>
                покупка и утилизация
                <br />
                отработанного
                <br />
                масла
              </p>
            </div>
          </Link>
        </div>
        <ul className="d-fl-col">
          {items.map((item) => (
            <li>
              <Link to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
