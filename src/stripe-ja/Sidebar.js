import { useContext } from "react";
import sublinks from "../stripeMenu/data/data";
import classes from "./SideBar.module.css";
import { PageContext } from "./context/context";
const SideBar = () => {
  const { closeSidebar, sideBarOpen } = useContext(PageContext);

  return (
    <>
      {sideBarOpen && (
        <div className={classes.sidebarWrapper} onClick={closeSidebar}>
          <section className={classes.sidebar}>
            <ul className={classes.ul}>
              {sublinks.map((sublink, index) => (
                <li key={index}>
                  <h3>{sublink.page}</h3>
                  <div className={classes.list2}>
                    {sublink.links.map((link, index) => (
                      <div key={index}>
                        <span>{link.icon}</span>
                        <a href={link.url}>{link.label}</a>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={closeSidebar}>Close</button>
            <button>Sign in</button>
          </section>
        </div>
      )}
    </>
  );
};

export default SideBar;
