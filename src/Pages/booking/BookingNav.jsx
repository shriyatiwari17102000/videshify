import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

function BookingNav() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Navbar className="app_nav">
        <Nav className="mr-auto">
          <Link
            exact
            to="/bookingdash/booking"
            className={`nav_link ${
              activeLink === "/bookingdash/booking" ? "activeLink" : ""
            }`}
            onClick={() => handleLinkClick("bookingdash/booking")}
            style={{ marginLeft: "63px" }}
          >
            Booking
          </Link>
          <Link
            to="/bookingdash/enquiry"
            className={`nav_link ${
              activeLink === "/bookingdash/enquiry" ? "activeLink" : ""
            }`}
            onClick={() => handleLinkClick("/bookingdash/enquiry")}
          >
            Enquiries
          </Link>
          <Link
            to="/bookingdash/services"
            className={`nav_link ${
              activeLink === "/bookingdash/services" ? "activeLink" : ""
            }`}
            onClick={() => handleLinkClick("/bookingdash/services")}
          >
            My Services
          </Link>
        </Nav>
      </Navbar>
      <hr style={{ width: "1098px", marginLeft: "13px" }} />
    </div>
  );
}

export default BookingNav;
