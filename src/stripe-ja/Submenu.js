import { useContext, useRef, useEffect } from "react";
import { PageContext } from "./context/context";
import classes from "./Submenu.module.css";

const Submenu = () => {
  const {
    submenuOpen,
    page: { page, links },
    location,
  } = useContext(PageContext);

  const { center, bottom } = location;

  return (
    <>
      {submenuOpen && (
        <section
          className={classes.submenu}
          style={{ left: `${center}px`, bottom: `${bottom}px` }}
        >
          <h4>{page}</h4>
          <div className={classes.list}>
            {links.map((link, index) => (
              <p key={index}>
                {link.icon}
                {link.label}
              </p>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Submenu;
