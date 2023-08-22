import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import location from "../../images/location.png";
import calendar from "../../images/calendar.png";
import phone from "../../images/phone.png";
import user from "../../images/user.png";
import message from "../../images/message.png";
import { BiFilter } from "react-icons/bi";
import "./booking.css";
import BookingDashboard from "./BookingDashboard";

const Enquiry = () => {
  const [state, setState] = useState([
    {
      duration: "4 days ago",
      heading: '"Amazing product and company"',
      username: "Nishant Choudhari",
      location: "New Delhi, India",
      date: " Date 20/8/2023",
      phone: "7503063585",
      message:
        " Hi there! I heard you're currently studying abroad. I'm considering pursuing my studies in a foreign country and I could really use some guidance. Would you mind if I ask you a few questions?",
    },
    {
      duration: "4 days ago",
      heading: '"Amazing product and company"',
      username: "Nishant Choudhari",
      location: "New Delhi, India",
      date: " Date 20/8/2023",
      phone: "7503063585",
      message:
        " Hi there! I heard you're currently studying abroad. I'm considering pursuing my studies in a foreign country and I could really use some guidance. Would you mind if I ask you a few questions?",
    },
    {
      duration: "4 days ago",
      heading: '"Amazing product and company"',
      username: "Nishant Choudhari",
      location: "New Delhi, India",
      date: " Date 20/8/2023",
      phone: "7503063585",
      message:
        " Hi there! I heard you're currently studying abroad. I'm considering pursuing my studies in a foreign country and I could really use some guidance. Would you mind if I ask you a few questions?",
    },
  ]);

  return (
    <div className="right-aside" style={{ padding: "0" }}>
      <BookingDashboard />
      <div style={{ marginTop: "-28rem" }}>
        <div style={{ margin: "-617px 0px 27px 34px" }}>
          <button className="filter_btn">
            Add Filter
            <BiFilter className="filter_icon" />
          </button>
        </div>

        {state.map((item, index) => (
          <Card className="card_main">
            <Card.Body>
              <Row style={{ marginTop: "7px" }}>
                <Col>
                  <div className="heading_card">
                    <span style={{ color: " #B3B3B3" }}>#80340</span> -
                    Consultaion Services
                  </div>
                </Col>
                <Col className="text-right">
                  <div>{item.duration}</div>
                </Col>
              </Row>

              <div
                style={{
                  display: "flex",
                  marginBottom: "13px",
                  marginTop: "15px",
                }}
              >
                <div className="card_btm">
                  <img src={user} className="icon_div" />
                  <span className="cardbtm_inn">{item.username}</span>
                </div>

                <div className="card_btm">
                  {" "}
                  <img src={location} className="icon_div" />
                  <span className="cardbtm_inn">{item.location}</span>
                </div>

                <div className="card_btm">
                  {" "}
                  <img src={calendar} className="icon_div" />
                  <span className="cardbtm_inn">{item.date}</span>
                </div>

                <div className="card_btm">
                  {" "}
                  <img src={phone} className="icon_div" />
                  <span className="cardbtm_inn">{item.phone}</span>
                </div>
              </div>

              <hr style={{ marginTop: "-5px" }} />
              <Row>
                <Col xs="auto">
                  <div style={{ marginTop: "1px" }}>
                    <img src={message} />
                    <span className="msg_card">Message</span>
                  </div>
                </Col>
                <Col>
                  <p className="msgcard_para">{item.message}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Enquiry;
