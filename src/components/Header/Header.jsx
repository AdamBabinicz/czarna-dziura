import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./Header.css";

const navLinks = [
  {
    display: "Start",
    url: "#",
  },
  {
    display: "Definicja",
    url: "#definicja",
  },
  {
    display: "Rodzaje",
    url: "#rodzaje",
  },
  {
    display: "Śmierć",
    url: "#śmierć",
  },
  {
    display: "Moc",
    url: "#moc",
  },
  {
    display: "Sagittarius A*",
    url: "#sagittarius",
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i class="ri-checkbox-blank-circle-fill"></i> czarne dziury
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-3">
                <a href="#kontakt">
                  <button className="btn">
                    <i className="ri-phone-line"></i> Kontakt
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="mobile__menu">
            <span className="ri-menu-line" onClick={menuToggle}></span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
