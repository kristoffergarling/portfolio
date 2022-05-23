import { MenuItems } from "./MenuItems";

import classes from "Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes["navbar-items"]}>
      <h2 className={classes["navbar-logo"]}>Kristoffer Gärling</h2>
      <div className={classes["menu-icon"]}></div>
      <ul>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
