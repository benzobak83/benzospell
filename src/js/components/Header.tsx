import React, { useState, useRef } from "react";
const imgLogo = require("../../assets/img/logo.png");
const imgArrow = require("../../assets/img/down_arrow_white.png");
const imgMenu = require("../../assets/img/premium-icon-menu-2976215.png");
import { NavLink } from "react-router-dom";

function Header() {
  const [statusLink, setStatusLink] = useState("selected");

  return (
    <header className="header">
      <div className="header__logo">
        <img src={imgLogo} alt="logo" className="header__img-logo" />
      </div>
      <div className="header__menu">
        <ul className="header__ul">
          <NavLink to="/" className={statusLink}>
            <li
              className="header__li"
              onMouseOver={() => setStatusLink("not-selected")}
              onMouseOut={() => setStatusLink("selected")}
            >
              Главная
            </li>
          </NavLink>
          <NavLink to="contacts" className={statusLink}>
            <li
              className="header__li"
              onMouseOver={() => setStatusLink("not-selected")}
              onMouseOut={() => setStatusLink("selected")}
            >
              Контакты
            </li>
          </NavLink>
          <NavLink to="service" className={statusLink}>
            <li
              className="header__li"
              onMouseOver={() => setStatusLink("not-selected")}
              onMouseOut={() => setStatusLink("selected")}
            >
              О сервисе
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="header__settings">
        <div className="header__language">
          <i className="icon icon-flags_ru"></i>
          <span className="header__lang-text">Русский</span>
          <img src={imgArrow} alt="arrow" className="header__arrow-down" />
        </div>
        <div className="header__menu-btn">
          <img src={imgMenu} alt="menu" className="header__img-menu" />
        </div>
      </div>
      <div className="burger-menu">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
}

export { Header };
