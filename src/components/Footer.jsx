import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
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
      </div>
    </footer>
  );
}

export default Footer;
