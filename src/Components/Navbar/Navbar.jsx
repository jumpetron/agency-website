import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../Common/menuItems";
import navbarStyles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className={navbarStyles.navbar}>
          <div className="logo">
            <Link to="/">
              <h3>Optimarko.</h3>
            </Link>
          </div>
          <ul className={navbarStyles.navMenu}>
            {menuItems.map((item, index) => (
              <li key={index} className={navbarStyles.navItem}>
                <NavLink to={item.url} className="navLink">
                  {item.menu}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={navbarStyles.mobileMenuIcon}>
            <i className="fi fi-rr-apps"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
