import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import AddSchedule from "./AddSchedule";
import add_plan from "../../images/add_plan.png";
import MyCalendar from "./Calender";

const ScheduleCalender = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
              Plan & Billing
            </span>
          </p>
        </div>
        {/* Calendar Section */}
        <div
          style={{
            marginLeft: "13px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 className="conselor_head">Schedule</h1>
            <p className="conselor_para">
              You Can See Your Schedule And Add An Meeting
            </p>
          </div>
          <button className="add_schedule_btn" onClick={handleShow}>
            <img src={add_plan} />
            Add Schedule
          </button>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            marginLeft: "13px",
            width: "1108px",
            height: "863px",
          }}
        >
          <MyCalendar />
        </div>
      </div>
      <AddSchedule show={show} handleClose={handleClose} />
    </>
  );
};

export default ScheduleCalender;
