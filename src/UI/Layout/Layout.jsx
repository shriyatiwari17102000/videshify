import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import style from "./Layout.module.css";

const Layout = (props) => {
  const [active, setactive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleHb = () => {
    console.log("clicked");
    setactive(!active);
  };
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
    console.log("hello i am console");
  };

  return (
    <div className="body-wrapper grid-container">
      <div
        className={`${style.sb} sidebar-container ${
          openSidebar === true ? style.expanded : ""
        } `}
      >
        <Sidebar func={handleOpenSidebar}  toggleHb={toggleHb} active={active} />
      </div>
      <div className={style.bg}>
        <Navbar func={handleOpenSidebar} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
