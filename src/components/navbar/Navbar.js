import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import calendarcheck from "../../images/calendarcheck.png";
import user_img from "../../images/user_img.png";
import alertcircle from "../../images/alertcircle.png";
import settingicon from "../../images/settingicon.png";

const Navbar = (props) => {
  const [user, setUser] = useState([
    {
      img: user_img,
      name: "Nishant Choudhari",
    },
  ]);

  return (
    <>
      <nav className="top-nav">
        <div className="nav-left">
          <div className="search-bar">
            <FiSearch className="navsearch-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-right">
          <img src={alertcircle} className="topbar_icon" />
          <img src={settingicon} className="topbar_icon set_icn" />
          <img src={calendarcheck} className="topbar_icon" />
          {user.map((item, index) => (
            <>
              <img src={item.img} className="nav-icon" />
              <p className="topbar_para">{item.name}</p>
              <BsChevronDown className="downarrow_nav" />
            </>
          ))}
          <button className="sidebar_btn" onClick={()=> props.func()}><div></div><div></div><div></div></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
