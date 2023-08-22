import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import MyplansTable from "../../alltables/MyplansTable";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import calendarcheck from "../../images/calendarcheck.png";
import DatePicker from "react-datepicker";
import MyplanCard from "./MyplanCard";
import AddPlanModal from "./AddPlanModal";
import add_plan from "../../images/add_plan.png";
import Tile from "../../components/Tile/Tile";


const c1_data = [
  {
    h4:' Total Plan Purchased',
    h1:"56",
    p:"  See here your total no of students that Purchase your any   plans"
  }
]
const c2_data = [
  {
    h4:'Recently Added',
    h1:"56",
    p:"  See here your Recently added students"
  },
  {
    h4:'Upcoming Sessions',
    h1:"56",
    p:"See here your total amount remains against for sessions"
  },
]
const Myplans = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
            My Plans
          </span>
        </p>
      </div>

      {/* card */}
      <div style={{ marginLeft: "13px" }} className="myplan-margin">
        <Container fluid style={{ marginLeft: "-13px" }}>
          <Row className="w-100 px-0">
           
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

        {/* card section */}
        <div
          style={{
            display: "flex",
            marginTop: "78px",
            justifyContent: "space-between",
            marginRight: "28px",
          }}
          className="myplan-header_div"
        >
          <div style={{ marginTop: "-3rem" }}>
            {" "}
            <h1 className="stu_head">My Plans</h1>
            <p className="stu_para">
              See here all your plans made up for students{" "}
            </p>
          </div>

          <button className="addplan" onClick={handleShow}>
            <img src={add_plan} />
            Add Plan
          </button>
        </div>
        <MyplanCard />
        {/* table nav */}

        <div
          style={{
            display: "flex",
            marginTop: "78px",
            justifyContent: "space-between",
            marginRight: "28px",
          }}
          className="myplan-header_div"
        >
          <div style={{ marginTop: "-3rem" }}>
            {" "}
            <h1 className="stu_head">Plans Purchase History</h1>
            <p className="stu_para">
              See here all your plans Purchase history{" "}
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
        <MyplansTable />
      </div>
      <AddPlanModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default Myplans;
