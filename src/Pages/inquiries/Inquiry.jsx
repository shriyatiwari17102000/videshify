import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FiSearch } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarcheck from "../../images/calendarcheck.png";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import MyInquiryTable from "../../alltables/MyInquiryTable";
import Tile from "../../components/Tile/Tile";

const c1_data = [
  {
    h4: "Total Plan Purchased",
    h1: "056",
    p: "  See here your total no of students that Purchase your any plans",
  },
];

const c2_data = [
  {
    h4: "Recent Added",
    h1: "056",
    p: "See here your Recently added student",
  },
  {
    h4: "Upcoming Sessions",
    h1: "056",
    p: "See here your total amount remains against for sessions",
  },
];

function Inquiry() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  return (
    <div className="right-aside">
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <p className="route_p" style={{ display: "flex" }}>
          <a
            href="/"
            className="route_p_dash"
            style={{  marginTop: "0" }}
          >
            Dashboard{" "}
          </a>
          <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
          <span className="route_p_home" style={{ marginTop: "5px" }}>
            Inquiry
          </span>
        </p>
      </div>

      {/* card */}
      <div>
        <Container fluid className="pe-0">
          <Row className="w-100  px-0">
            <Col sm={12} md={4}>
              <Tile data={c1_data} />
            </Col>
            <Col sm={12} md={8}>
              <Tile data={c2_data} />
            </Col>
          </Row>
        </Container>

        {/* table */}

        <div
          style={{
            display: "flex",
            marginTop: "78px",
            justifyContent: "space-between",
            marginRight: "28px",
          }}
        >
          <div style={{ marginTop: "-3rem", marginLeft:"27px" }}>
            {" "}
            <h1 className="stu_head">Inquiries</h1>
            <p className="stu_para">
              See here all your plans made up for students{" "}
            </p>
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
        <MyInquiryTable />
      </div>
    </div>
  );
}

export default Inquiry;
