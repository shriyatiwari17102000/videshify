import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./planning.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import purchase_email from "../../images/purchase_email.png";
import purchase_msg from "../../images/purchase_msg.png";

const PurchaseCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const leftItems = [
    "Basic features for up to 10 users with unlimited bookings and Students",
    "Basic features for up to 10 users with unlimited bookings and Students",
    "Basic features for up to 10 users with unlimited bookings and Students",
    "Basic features for up to 10 users with unlimited bookings and Students",
    "Basic features for up to 10 users with unlimited bookings and Students",
  ];
  const rightItems = [
    "Basic features for up to 10 users with unlimited bookings and Students",
    "Basic features for up to 10 users with unlimited bookings and Students",
    "Basic features for up to 10 users with unlimited bookings and Students",
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const cards = [
    {
      title: "Pay Monthly",
      price: "₹1400",
    },
    {
      title: "Pay Yearly",
      price: "₹16,800",
      save: "Save 20%",
    },
  ];

  return (
    <div>
      <Card
        style={{
          width: "767px",
          height: "910px",
          marginLeft: "-10px",
          marginTop: "19px",
        }}
      >
        <Card.Body style={{ marginLeft: "10px" }}>
          <div>
            <h1 className="web_head" style={{ marginTop: "12px" }}>
              Purchase a plan
            </h1>
            <p className="web_para">Manage your Plan & Billing Details</p>
          </div>
          <Card className="purchase_card">
            <Card.Body>
              <h4 className="purchase_head">Features</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "-57px",
                }}
              >
                {/* Left Side */}
                <div style={{ flex: 1, marginTop: "80px" }}>
                  <ul>
                    {leftItems.map((item, index) => (
                      <li className="purchase_li" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Right Side */}
                <div style={{ flex: 1, marginTop: "80px" }}>
                  <ul>
                    {rightItems.map((item, index) => (
                      <li className="purchase_li" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* 2nd card section */}

          <div className="midcard_div">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="purchase_midcard"
                onClick={() => handleCardClick(index)}
              >
                <Card.Body>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h1 className="purchase_heading">{card.title}</h1>
                    {index === 1 && (
                      <Button variant="primary" className="purchase_btn">
                        {card.save}
                      </Button>
                    )}
                  </div>
                  <Card.Text className="purchase_para">{card.price}</Card.Text>
                  {selectedCard === index && (
                    <FontAwesomeIcon icon={faCheck} className="right_icon" />
                  )}
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* 3rd card section */}

          <Card className="btm_div">
            <Card.Body>
              {/* Top Section */}
              <h4 className="btm_card_head">Billing Email</h4>
              <Row className="btm_row">
                <Col xs={1}>
                  <img src={purchase_msg} />
                </Col>
                <Col className="btm_card_para" xs={11}>
                  Email Address
                </Col>
              </Row>
              {/* Horizontal line to separate the sections */}
              <hr style={{ width: "104.5%", margin: "15px -17px" }} />
              {/* Bottom Section */}
              <h4 className="btm_card_head">Card Details</h4>
              <Row className="btm_row">
                <Col xs={1}>
                  <img src={purchase_email} />
                </Col>
                <Col xs={11} className="btm_card_para">
                  Card Number{" "}
                </Col>
                <div
                  style={{
                    marginLeft: "34rem",
                    marginTop: "-24px",
                    display: "flex",
                    flexDirection: "inherit",
                  }}
                  className="btm_card_para"
                >
                  <span style={{ marginRight: "30px" }}>MM/YY</span>
                  <span>CVV</span>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
        {/* Footer */}
        <Card.Footer style={{ backgroundColor: "white", height: "70px" }}>
          <div className="btn_btm_div">
            <Button className="btm_purchse_btn">Cancel</Button>
            <Button className="btm_purchse_btn2">Purchase</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PurchaseCard;
