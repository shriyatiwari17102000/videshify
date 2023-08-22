import { useState } from "react";
import "./booking.css";
import Navbar from "../../components/navbar/Navbar";
import { FiSearch } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarcheck from "../../images/calendarcheck.png";
import {
    ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import AddCustomBooking from "./AddCustomBooking";
import Tile from "../../components/Tile/Tile";
import BookingTable from "../../alltables/BookingTable";

const c1_data = [
  {
    h4:"Total Plan Purchased",
    h1:"056",
    p:"  See here your total no of students that Purchase your any  plans"
  }
]
const c2_data = [
  {
    h4: "Recent Added",
    h1: "56",
    p: "See here your Recently added students",
  },
  {
    h4: "Upcoming Sessions",
    h1: "056",
    p: " See here your total amount remains against for sessions",
  },
];

function BookingDashboard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [show, setShow] = useState(false);

 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  return (
    <div className="right-aside">
    
      <div>
        <p className="route_p" style={{ display: "flex" }}>
          <a
            href="/"
            className="route_p_dash"
            style={{ marginTop: "0" }}
          >
            Dashboard{" "}
          </a>
          <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
          <span className="route_p_home" style={{ marginTop: "5px" }}>
            Booking
          </span>
        </p>
      </div>

      {/* card */}
      <div style={{ marginLeft: "13px" }}>
        <Container fluid style={{ marginLeft: "-13px" }}>
          <Row>
          <Col sm={12} md={4}>
            <Tile
              data={c1_data}
             
            />
          </Col>

          <Col sm={12} md={8} className="d-flex">
            <Tile data={c2_data} />
          </Col>

          </Row>
        </Container>

        {/* button group */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "28px",
            marginTop: "26px",
          }}
        >
          <ButtonGroup aria-label="Basic example">
            <button className="btn_grp1">Future Bookings</button>
            <button className="btn_grp2">Past Bookings</button>
          </ButtonGroup>
          <button className="btn_grp1 right_btn_book" onClick={handleShow}>
            Add Custom booking
          </button>
        </div>

        {/* table */}

        <div
          style={{
            display: "flex",
            marginTop: "78px",
            justifyContent: "space-between",
            marginRight: "28px",
          }}
        >
          <div style={{ marginTop: "-3rem" }}>
            {" "}
            <h1 className="stu_head">Bookings</h1>
            <p className="stu_para">See here all your plans made up for students  </p>
          </div>
          <div
            className="search-container"
            style={{ display: "flex", marginTop: "-13px" }}
          >
            <input
              type="text"
              className="booking_searchbox"
              placeholder="Search by Name"
            />
            <span className="search-icon">
              <FiSearch className="book_search_icon" />
            </span>
            <div className="date-picker-button-container">
              <button
                className="date-picker-button"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                <span className="button-icon">
                  <img className="booking_calnder" src={calendarcheck} />
                </span>
                Choose Date
              </button>
              {showDatePicker && (
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  inline
                />
              )}
            </div>
          </div>
        </div>
       <BookingTable/>
      </div>
      <AddCustomBooking show={show} handleClose={handleClose} />
    </div>
  );
}

export default BookingDashboard;
