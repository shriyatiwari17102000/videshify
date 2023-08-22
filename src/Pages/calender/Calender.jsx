import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.css"; // Import your custom CSS file
import { Card } from "react-bootstrap";
import cal_clockicon from "../../images/cal_clockicon.png";
import calendar_calicon from "../../images/calendar_calicon.png";
import event_img1 from "../../images/event_img1.png";
import event_img2 from "../../images/event_img2.png";
import event_img3 from "../../images/event_img3.png";
import event_img4 from "../../images/event_img4.png";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    start: new Date(),
    end: new Date(),
    img: event_img1,
    text: "Lucky",
  },
  {
    id: 2,
    start: new Date(moment().add(3, "days")),
    end: new Date(moment().add(3, "days")),
    img: event_img2,
    text: "Jacob",
  },
  {
    id: 3,
    start: new Date(moment().add(12, "days")),
    end: new Date(moment().add(12, "days")),
    img: event_img3,
    text: "Marcus",
  },
  {
    id: 4,
    start: new Date(moment().add(15, "days")),
    end: new Date(moment().add(15, "days")),
    img: event_img4,
    text: "Tristen",
  },
];

const MyCalendar = () => {
  const EventComponent = ({ event }) => {
    const [showCard, setShowCard] = useState(false);
    const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

    // const handleMouseEnter = () => {
    //   setShowCard(true);
    // };
    const handleMouseEnter = (e) => {
      setShowCard(true);
      const rect = e.target.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setCardPosition({
        top: mouseY + 10, // Adjust as needed
        left: mouseX + 10, // Adjust as needed
      });
    };

    const handleMouseLeave = () => {
      setShowCard(false);
    };

    return (
      <>
        {/* Display event image */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "248%",
            marginLeft: "6px",
          }}
        >
          <img
            src={event.img}
            alt="Event"
            className="event-img"
            // style={{ marginTop: "20px" }}
          />
          <p className="event-text">{event.text}</p>
        </div>
        <div
          className="event-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
        {showCard && (
          <Card
            className="cardCalender"
            style={{
              top: cardPosition.top,
              left: cardPosition.left,
            }}
          >
            {/* Header */}
            <Card.Header className="cardCalender_head">
              <Card.Title className="cardCalender_title">
                Basic Career Counselling
              </Card.Title>
              <div className="cardCalender_div">
                <Card.Text className="cardCalender_txt">
                  <img src={calendar_calicon} style={{ marginRight: "6px" }} />
                  Wed,June 12
                </Card.Text>
                <Card.Text className="cardCalender_txt">
                  <img src={cal_clockicon} style={{ marginRight: "6px" }} />
                  9:30 Am to 10:30 Am
                </Card.Text>
              </div>
            </Card.Header>

            {/* Body */}
            <Card.Body style={{ padding: "20px", whiteSpace: "normal" }}>
              <Card.Title className="cardCalender_subtitle">
                Description
              </Card.Title>
              <Card.Text className="cardCalender_para">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.{" "}
              </Card.Text>
              <div>
                <Card.Title className="cardCalender_subtitle">
                  Attendees
                </Card.Title>
              </div>
            </Card.Body>

            {/* Footer */}
            <Card.Footer className="cardCalender_footer">
              <button className="cardCalender_cancelbtn">Reschedule</button>{" "}
              <button className="modal_addbtn">Start meeting Now</button>
            </Card.Footer>
          </Card>
        )}
      </>
    );
  };

  const dayPropGetter = (date) => {
    const selectedDate = moment(date).startOf("day");
    const today = moment().startOf("day");
    const hasEvent = events.some((event) =>
      moment(event.start).isSame(selectedDate, "day")
    );

    if (hasEvent) {
      // Add background color for dates with events
      return {
        style: {
          border: "1px solid #E3E3E3",
          background: "#DEEFFF",
        },
      };
    }

    if (selectedDate.isSame(today)) {
      // Add border and background for the selected date
      return {
        style: {
          border: "1px solid #E3E3E3",
          background: "#DEEFFF",
        },
      };
    }

    return {};
  };

  return (
    <div
      style={{
        height: "780px",
        width: "1020px",
        marginLeft: "-14px",
        marginTop: "-18px",
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        components={{
          event: EventComponent,
        }}
        style={{ margin: "50px" }}
        dayPropGetter={dayPropGetter}
        views={{
          month: true, // Show only the month view
        }}
        toolbar={false} // Hide the toolbar
      />
    </div>
  );
};

export default MyCalendar;
