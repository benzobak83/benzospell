import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner wrapper">
        <p className="footer__title">
          © 2022 Benzospell / developed by benzobak83
        </p>

        <ul className="footer__menu">
          <li className="footer__item">
            <a href="" className="footer__link">
              FAQ
            </a>
          </li>
          <li className="footer__item">
            <a href="" className="footer__link">
              Repository
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
