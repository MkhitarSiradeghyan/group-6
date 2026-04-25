import React from "react";
import s from "./Header.module.sass";
import Container from "../Container/Container";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className={s.header}>
      <Container>
        <div className={s.wrap}>
          <Link to="/" className={s.logo}>
            Logo
          </Link>
          <div className={s.group}>
            <nav className={s.nav}>
              <Link className={s.link} to="/">Home</Link>
              <Link className={s.link} to="/periodic-table">Periodic Table</Link>
            </nav>
            <div className={s.actions}>
            <select>
              <option value="hy">Հայերեն</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
            <Link className={s.login} to="/login">Login</Link>
            <Link className={s.register} to="/register">Register</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
