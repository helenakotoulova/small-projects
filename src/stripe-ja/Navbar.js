import logo from "../stripeMenu/images2/logo.svg";
import sublinks from "../stripeMenu/data/data";
import classes from "./Navbar.module.css";
import { PageContext } from "./context/context";
import { useContext } from "react";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(PageContext);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <header className={classes.navbar} onMouseOver={handleSubmenu}>
      <nav className={classes.nav}>
        <img src={logo} />
        <ul className={classes.list}>
          {sublinks.map((sublink, index) => (
            <li key={index}>
              <button
                onMouseOver={displaySubmenu}
                onClick={displaySubmenu}
                className={`${classes.sublinkButton} link-btn`}
              >
                {sublink.page}
              </button>
            </li>
          ))}
        </ul>
        <button className={classes.navbarButton}>Sign In</button>
        <button onClick={openSidebar} className={classes.showSideBar}>
          Show Sidebar
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
