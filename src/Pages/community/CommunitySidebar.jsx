import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import "./community.css";
const CommunitySidebar = () => {
  const [subnav, setSubnav] = useState({
    groups: true, // Set to true for "Groups" dropdown to be open by default
    events: true,
    channels: true,
  });

  const SidebarData = [
    {
      title: "Groups",
      path: "/messages",

      iconClosed: <IoIcons.IoIosArrowUp />,
      iconOpened: <IoIcons.IoIosArrowDown />,
      iconOpen: <BiIcons.BiPlusCircle />,
      subNav: [
        {
          title: "All Groups",
          path: "/allgroups",
        },
        {
          title: "Academics",
          path: "/allgroups/academics",
        },
        {
          title: "Application Year",
          path: "/allgroups/application",
        },
        {
          title: "Career Pathways",
          path: "/allgroups/career",
        },
        {
          title: "Country",
          path: "/allgroups/country",
        },
        {
          title: "Extracurriculars",
          path: "/allgroups/extracurriculars",
        },
        {
          title: "Social and Identity",
          path: "/allgroups/social",
        },
      ],
    },
    // ///////// //
    {
      title: "Events",
      path: "/event",
      iconClosed: <IoIcons.IoIosArrowUp />,
      iconOpened: <IoIcons.IoIosArrowDown />,
      iconOpen: <BiIcons.BiPlusCircle />,

      subNav: [
        {
          title: "All Events",
          path: "/event/allevent",
        },
        {
          title: "Upcoming",
          path: "/event/upcoming",
        },
        {
          title: "Recorded Sessions",
          path: "/event/recordedsession",
        },
      ],
    },
    // ///// //
    {
      title: "Channels",
      path: "/channel",

      iconClosed: <IoIcons.IoIosArrowUp />,
      iconOpened: <IoIcons.IoIosArrowDown />,

      iconOpen: <BiIcons.BiPlusCircle />,
      subNav: [
        {
          title: "All Channel",
          path: "/channel/allchannel",
        },
        {
          title: "Upcoming",
          path: "/channel/upcoming",
        },
        {
          title: "Recorded Sessions",
          path: "/channel/recordedsession",
        },
      ],
    },
  ];

  // Function to manually toggle the subnav dropdown
  const toggleSubnav = (itemTitle) => {
    setSubnav((prevSubnav) => ({
      ...prevSubnav,
      [itemTitle]: !prevSubnav[itemTitle],
    }));
  };

  return (
    <div>
      <div classname="sidebar_nav_com">
        <div className="sidebar_wrap_com">
          <h4 className="community_head"># &nbsp; &nbsp; Community</h4>
          {SidebarData.map((item, index) => {
            return (
              <SubMenu
                item={item}
                key={index}
                isOpen={subnav[item.title.toLowerCase()]}
                toggleSubnav={toggleSubnav}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SubMenu = ({ item, isOpen, toggleSubnav }) => {
  const [subnav, setSubnav] = useState(isOpen);

  const showSubnav = () => {
    setSubnav(!subnav);
    toggleSubnav(item.title.toLowerCase());
  };

  return (
    <>
      <div
        className="sidebar_link_com sidebar_drophead_com"
        style={{ display: "flex" }}
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div style={{ marginLeft: "-24px" }}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
        <div style={{ display: "flex" }}>
          {item.icon}
          <div className="sidebar_drophead_com">{item.title}</div>

          <div className="sidebar_navicon_com">
            {item.subNav && subnav
              ? item.iconOpen
              : item.subNav
              ? item.iconOpen
              : null}
          </div>
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div className="dropdown_link_com" to={item.path} key={index}>
              {item.icon}
              <div className="sidebar_label_com">{item.title}</div>
            </div>
          );
        })}
    </>
  );
};

export default CommunitySidebar;
