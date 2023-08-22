import React from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PiDiamondsFourLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { MdNotificationsNone } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUser, BiX, BiSolidMapPin, BiHash } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import user_img from "../../images/user_img.png";
import videsify_logo from "../../images/videsify_logo.png";

const Sidebar = (props) => {
  const location = useLocation();

  let pathname = location.pathname;

  pathname = pathname.split("/")[1];

  return (
    <div className="item1">
      {props.active ? (
        <BiX onClick={props.toggleHb} className="humberger-menu closeMenu" />
      ) : (
        <GiHamburgerMenu onClick={props.toggleHb} className="humberger-menu" />
      )}
      <nav>
        <div className="top">
          <Link to={"/"} className="logo-link">
            <img src={videsify_logo} alt="icon" />
            Videshify
          </Link>

          <button className="cut-btn" onClick={() => props.func()}>
            <RxCross2 />
          </button>
        </div>
        <ul>
          <p>Generals</p>
          <li
            onClick={() => props.func()}
            className={pathname == "" && "active"}
          >
            {" "}
            <Link to={"/"} className="nav-anchor">
              <PiDiamondsFourLight className="fas active" />{" "}
              <span className="nav-item">Dashboard</span>
            </Link>
          </li>

          <li
            onClick={() => props.func()}
            className={pathname == "studentinfo" && "active"}
          >
            {" "}
            <Link to={"studentinfo"} className="nav-anchor">
              <BiUser className="fas" />{" "}
              <span className="nav-item">Student Information </span>
            </Link>
          </li>

          <li
            onClick={() => props.func()}
            className={pathname == "bookingdash" && "active"}
          >
            {" "}
            <Link to={"bookingdash"} className="nav-anchor">
              <BiUser className="fas" />{" "}
              <span className="nav-item">Booking </span>
            </Link>
          </li>
          <li
            onClick={() => props.func()}
            className={pathname == "inquiry" && "active"}
          >
            {" "}
            <Link to={"inquiry"} className="nav-anchor">
              <BiUser className="fas" />{" "}
              <span className="nav-item">My Inquiry </span>
            </Link>
          </li>
          <li
            onClick={() => props.func()}
            className={pathname == "myplans" && "active"}
          >
            {" "}
            <Link to={"myplans"} className="nav-anchor">
              <BiUser className="fas" />{" "}
              <span className="nav-item">My Plans </span>
            </Link>
          </li>

          <li
            onClick={() => props.func()}
            className={pathname == "planbilling" && "active"}
          >
            {" "}
            <Link to={"planbilling"} className="nav-anchor">
              <BiSolidMapPin className="fas" />{" "}
              <span className="nav-item">Plan & Billing</span>
            </Link>
          </li>

          <li
            onClick={() => props.func()}
            className={pathname == "community" && "active"}
          >
            {" "}
            <Link to={"community"} className="nav-anchor">
              <BiHash className="fas" />{" "}
              <span className="nav-item">Community</span>
            </Link>
          </li>

          <li
            onClick={() => props.func()}
            className={pathname == "messages" && "active"}
          >
            {" "}
            <Link to={"messages"} className="nav-anchor">
              <TiMessages className="fas" />{" "}
              <span className="nav-item">Messages</span>
            </Link>
          </li>
          <li
            onClick={() => props.func()}
            className={pathname == "payment" && "active"}
          >
            {" "}
            <Link to={"payment"} className="nav-anchor">
              <TiMessages className="fas" />{" "}
              <span className="nav-item">Payment</span>
            </Link>
          </li>

          <li
            onClick={() => props.func()}
            className={pathname == "notifications" && "active"}
          >
            {" "}
            <Link to={"notifications"} className="nav-anchor">
              <MdNotificationsNone className="fas" />{" "}
              <span className="nav-item">Notifications</span>
            </Link>
          </li>
          <li
            onClick={() => props.func()}
            className={pathname == "counselor" && "active"}
          >
            {" "}
            <Link to={"counselor"} className="nav-anchor">
              <MdNotificationsNone className="fas" />{" "}
              <span className="nav-item">Counselor</span>
            </Link>
          </li>

          <li
            onClick={() => props.func()}
            className={pathname == "support" && "active"}
          >
            {" "}
            <Link to={"support"} className="nav-anchor">
              <HiOutlineSupport className="fas" />{" "}
              <span className="nav-item">Support</span>
            </Link>
          </li>
          <li
            onClick={() => props.func()}
            className={pathname == "resourcecenter" && "active"}
          >
            {" "}
            <Link to={"resourcecenter"} className="nav-anchor">
              <HiOutlineSupport className="fas" />{" "}
              <span className="nav-item">Resource Center</span>
            </Link>
          </li>
          <li
            onClick={() => props.func()}
            className={pathname == "schedule" && "active"}
          >
            {" "}
            <Link to={"schedule"} className="nav-anchor">
              <HiOutlineSupport className="fas" />{" "}
              <span className="nav-item">Schedule</span>
            </Link>
          </li>
          <li
            onClick={() => props.func()}
            className={pathname == "dailycaleneder" && "active"}
          >
            {" "}
            <Link to={"dailycaleneder"} className="nav-anchor">
              <HiOutlineSupport className="fas" />{" "}
              <span className="nav-item">Calendar</span>
            </Link>
          </li>
          <div className="another-nav-section">
            <p>Settings</p>
            <li
              onClick={() => props.func()}
              className={pathname == "roles" && "active"}
            >
              <Link to={"roles"} className="nav-anchor">
                <BiUser className="fas" />{" "}
                <span className="nav-item">Roles</span>
              </Link>
            </li>

            <li
              onClick={() => props.func()}
              className={pathname == "preferences" && "active"}
            >
              <Link to={"preferences"} className="nav-anchor">
                <HiOutlineCursorArrowRipple className="fas" />{" "}
                <span className="nav-item">Preferences</span>
              </Link>
            </li>

            <li
              onClick={() => props.func()}
              className={pathname == "profile" && "active"}
            >
              <Link to={"profile"} className="nav-anchor">
                <AiOutlineSetting className="fas" />{" "}
                <span className="nav-item">Profile</span>
              </Link>
            </li>
          </div>
        </ul>
        <footer>
          <div className="footer-section">
            <img src={user_img} alt="profile" />
            <h2>Nishant Choudhary</h2>
          </div>
        </footer>
      </nav>
    </div>
  );
};
export default Sidebar;
