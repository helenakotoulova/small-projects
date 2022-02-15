import { useState } from "react";
import data from "./data";
import classes from "./Navbar.module.css";
import Submenu from "./Submenu";

const Navbar = () => {
  const [subMenuOpen, setSubmenuOpen] = useState({
    state: false,
    page: "",
    coordinates: {},
  });
  const displayMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom;
    const coordinates = { center, bottom };
    setSubmenuOpen({ state: true, page: page, coordinates: coordinates });
    console.log(subMenuOpen);
  };

  const closeSubmenu = (e) => {
    if (!e.target.classList.contains("specBtn")) {
      console.log(e.target.classList.contains("specBtn"));
      setSubmenuOpen({ state: false, page: "", coordinates: {} });
    }
  };
  return (
    <>
      <header className={classes.header} onMouseOver={closeSubmenu}>
        <nav className={classes.nav}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              {data.map((link, index) => (
                <button
                  key={index}
                  className={`${classes.linkButton} specBtn`}
                  onMouseOver={displayMenu}
                >
                  {link.page}
                </button>
              ))}
            </li>
          </ul>
        </nav>
      </header>
      <Submenu submenu={subMenuOpen} />
    </>
  );
};

export default Navbar;
