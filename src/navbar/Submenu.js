import data from "./data";
import classes from './Submenu.module.css';

const Submenu = ({ submenu }) => {
  const { state, page, coordinates } = submenu;
  const {center,bottom}=coordinates;
  const found = data.find((el) => el.page === page);
  return (
    <>
      {state === true && (
        <div className={classes.submenu} style={{left:`${center}px`,bottom:`${bottom}px`}}>
          <ul className={classes.list}>
            {found.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <button>{link.label}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Submenu;
