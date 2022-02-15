import Submenu from "./Submenu";
import Hero from "./Hero";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

const Subapp = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Hero />
      <Submenu />
    </>
  );
};

export default Subapp;
