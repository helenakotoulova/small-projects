import React, { useState } from "react";
import sublinks from "../../stripeMenu/data/data";
export const PageContext = React.createContext();
const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setSideBarOpen(true);
  };
  const closeSidebar = () => {
    setSideBarOpen(false);
  };

  const openSubmenu = (text,coordinates) => {
    setSubmenuOpen(true);
    const page = sublinks.find((link) => link.page === text);
    setLocation(coordinates);
    setPage(page);
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };
  const context = {
    sideBarOpen,
    openSidebar,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
    submenuOpen,
    page,
    location,
  };
  return <PageContext.Provider value={context}>{children}</PageContext.Provider>;
};

export default ContextProvider;
