// import { Eventcalendar } from "@mobiscroll/react";
// import { useState, useCallback } from "react";
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";
// import "./calender.css";
// import Navbar from "../../components/navbar/Navbar";

// const Cardd = () => {
//   const view = {
//     schedule: {
//       type: "day",
//       startTime: "07:00",
//       endTime: "7:30",
//     },
//   };
//   const [events, setEvents] = useState([
//     {
//       start: new Date(2023, 7, 5, 10, 0),
//       end: new Date(2023, 7, 5, 10, 30),
//       title:
//         'Career Counselling<br/> Agenda:abcd<br/><div className="divvv"><p>10:00am to 10:30pm</p><br/><a href="/schedule">Details<a/></div>',
//       color: "green",
//     },
//   ]);
//   const labels = [
//     {
//       start: new Date(2023, 7, 5, 10, 0),
//       end: new Date(2023, 7, 5, 17, 30),
//       text: "Hello",
//     },
//   ];

//   return (
//     <>
//       <div className="right-aside">
//         {/* <div>
//           <Navbar />
//         </div> */}
//         <div>
//           <p className="route_p" style={{ display: "flex" }}>
//             <a href="/" className="route_home">
//               Dashboard{" "}
//             </a>
//             <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
//             <span style={{ marginTop: "0px", color: "black" }}>Counselors</span>
//           </p>
//         </div>
//         <div style={{ marginLeft: "20px" }}>
//           <div>
//             <h1 className="conselor_head">Schedule</h1>
//             <p className="conselor_para">
//               See All Counselors and their details here
//             </p>
//           </div>
//           <Eventcalendar labels={labels} data={events} view={view} />{" "}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Cardd;

import React, { useState } from "react";
// import Container from '../../UI/Container/Container'
import classes from "./ListCalender.module.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import SessionDetails from "./SessionsDetails";
// import img from '../../assets/add-square-03.png'
// import RescheduleModal from '../AllModals/RescheduleModal/RescheduleModal';
const Cardd = () => {
  const [popup, setPopup] = useState(false);

  const timeArr = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 AM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
  ];

  const dataArr = [
    {
      id: "1",
      initial_time: "10:30 AM",
      title: "Maths Class",
      agenda: "Complete calculas last exercise",
      timing: "10:30 AM to 11:00 AM",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  // Helper function to get the current month and year
  const getCurrentMonthYear = () => {
    const currentDate = new Date();
    return {
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    };
  };

  const [currentMonthYear, setCurrentMonthYear] = useState(
    getCurrentMonthYear()
  );

  const handlePrevMonth = () => {
    setCurrentMonthYear((prev) => {
      const prevMonth = prev.month - 1;
      const prevYear = prev.year;

      if (prevMonth < 0) {
        return { month: 11, year: prevYear - 1 };
      } else {
        return { month: prevMonth, year: prevYear };
      }
    });
  };

  const handleNextMonth = () => {
    setCurrentMonthYear((prev) => {
      const nextMonth = prev.month + 1;
      const nextYear = prev.year;

      if (nextMonth > 11) {
        return { month: 0, year: nextYear + 1 };
      } else {
        return { month: nextMonth, year: nextYear };
      }
    });
  };

  const handleDateClick = (day) => {
    alert(new Date(currentMonthYear.year, currentMonthYear.month, day));
    setSelectedDate(
      new Date(currentMonthYear.year, currentMonthYear.month, day)
    );
  };

  const generateDays = (eventDate) => {
    const days = [];
    const firstDay = new Date(currentMonthYear.year, currentMonthYear.month, 1);
    const lastDay = new Date(
      currentMonthYear.year,
      currentMonthYear.month + 1,
      0
    );

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(
        currentMonthYear.year,
        currentMonthYear.month,
        day
      );
      const isCurrentMonth = currentDate >= firstDay && currentDate <= lastDay;
      days.push(
        <div
          key={day}
          className={`${classes.day} ${
            isCurrentMonth ? classes.current_month : classes.other_month
          } ${
            selectedDate &&
            currentDate.toDateString() === selectedDate.toDateString()
              ? classes.selected
              : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // function to open modal detail
  const openModal = () => setPopup(true);
  const handleClose = () => setPopup(false);

  return (
    <div className="right-aside">
      <div>
        <p className="route_p" style={{ display: "flex" }}>
          <a href="/" className="route_home">
            Dashboard{" "}
          </a>
          <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
          <span style={{ marginTop: "0px", color: "black" }}>Counselors</span>
        </p>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div>
          <h1 className="conselor_head">Schedule</h1>
          <p className="conselor_para">
            See All Counselors and their details here
          </p>

          <div className={classes.calender_container}>
            <h2 className={classes.heading}>
              {new Date(
                currentMonthYear.year,
                currentMonthYear.month
              ).toLocaleString("default", { month: "long", year: "numeric" })}
            </h2>

            <div className={classes.calendar_header}>
              <button onClick={handlePrevMonth}>
                <FiChevronLeft />
              </button>

              <div className={classes.calendar}>
                <div className={classes.days}>{generateDays()}</div>
              </div>

              <button onClick={handleNextMonth}>
                <FiChevronRight />
              </button>
            </div>

            <div className={classes.events_container}>
              {timeArr.map((element) =>
                dataArr.map((item, index) => (
                  <div
                    key={index}
                    className={classes.event_div}
                    onClick={openModal}
                  >
                    <span>{element}</span>

                    {element === item.initial_time ? (
                      <div style={{ background: "#ffe8e8" }}>
                        <h3>{item.title}</h3>
                        <h3>{item.agenda}</h3>
                        <div>
                          <h3>{item.timing}</h3>
                          <Link onClick={openModal}>Details</Link>
                        </div>
                      </div>
                    ) : (
                      <div className={classes.hoverable_div}>
                        {/* <img src={img} alt="" /> */}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <SessionDetails show={popup} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
