import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';
import SideNavigation from "./SideNavigation";

const Layout = ({children}) => {
  return (
    <section className={classes.layout}>
      <MainNavigation />
      <main className={classes.mainPart}><SideNavigation />{children}</main>
      <footer className={classes.footer}>© Our cocktails, 2022</footer>
    </section>
  );
};

export default Layout;
