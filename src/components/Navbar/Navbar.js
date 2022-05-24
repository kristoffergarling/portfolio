import { useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "../UI/Button";

import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    clicked ? setClicked(false) : setClicked(true);
  };

  const handleScroll = () => {
    window.scrollY >= 300 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-items">
        <h2 className="navbar-logo">KRISTOFFER GÄRLING</h2>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <Button>{MenuItems[3].title}</Button>
      </div>
    </nav>
  );
};

export default Navbar;
