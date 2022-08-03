import React, { useState } from "react";
import Menu from "./Menu";

import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeBtn, setBtnActive] = useState(false);

  const items = [
    { value: "Главная", href: "/" },
    { value: "Прибыль с масла", href: "/profit" },
    { value: "Вред отработанного масла", href: "/used" },
    { value: "Утилизация масла", href: "/processing" },
    { value: "Калькулятор прибыли", href: "/calc" },
    { value: "Правила хранения масла", href: "/rules" },
  ];

  return (
    <>
      <header className="header">
        <div className="d-fl">
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

          <div className="info d-fl">
            <ul className="d-fl-col">
              <li>
                Тюмень
                <ul>
                  <li>
                    <a href="/">8 (952) 677-50-03</a>
                  </li>
                </ul>
              </li>
              <li>
                Екатеринбург
                <ul>
                  <li>
                    <a href="/">8 (343) 302-10-61</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <nav className="d-fl">
            <div
              className={activeBtn ? "burger-btn active" : "burger-btn"}
              onClick={() => {
                setMenuActive(!menuActive);
                setBtnActive(!activeBtn);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} items={items} />
      </header>
    </>
  );
};

export default Header;
