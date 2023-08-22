import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "../customcss/custom.css";
import LabelledInput from "../../components/LabelledInput/LabelledInput";
import classes from "./ListCalender.module.css";
import TextArea from "../../components/textarea/TextArea";
import stuinfo_img1 from "../../images/stuinfo_img1.png";
import stuinfo_img2 from "../../images/stuinfo_img2.png";
import stuinfo_img3 from "../../images/stuinfo_img3.png";
import CardComponent from "../../components/CardComponent/CardComponent";

const data = [
  {
    label: "Session Name",
    id: "fn",
    value: "Search Person",
  },
];
const textareaData = [
  {
    label: "Description",
    value:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];
const cardData = [
  {
    img: stuinfo_img1,
    h1: "Ilzu Naza",
  },
  {
    img: stuinfo_img2,
    h1: "Andrew Staugh",
  },
  {
    img: stuinfo_img3,
    h1: "Stuart",
  },
];

const longerCard = [
  {
    img: stuinfo_img1,
    h1: "Avni kapoor",
    role: "student",
  },
];

function SessionDetails({ show, handleClose }) {
  const handleSubmit = () => {};
  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <div style={{ padding: "20px" }}>
          <Modal.Header style={{ borderBottom: "none" }} closeButton>
            <Modal.Title className="modal_title">Session Details</Modal.Title>
          </Modal.Header>
          <p
            className="modal_para"
            style={{ color: "#7D7D7D", marginLeft: "15px" }}
          >
            <span>Date 28/8/2023</span> &nbsp; &nbsp;&nbsp;
            <span>10:30 Am to 12:30 Am</span>
          </p>
          <Modal.Body className="modal_bdy">
            <div className={classes.profile_container}>
              <div className={`${classes.flex}`}>
                {data.map((element, index) => (
                  <LabelledInput
                    cls={classes.input_div}
                    label_modal={classes.labelclass}
                    key={index}
                    id={element.id}
                    ro={true}
                    label={element.label}
                    value={element.value}
                  />
                ))}
                {textareaData.map((element, index) => (
                  <TextArea
                    txtcls={classes.input_div}
                    key={index}
                    id={element.id}
                    ro={true}
                    label={element.label}
                    value={element.value}
                   
                  />
                ))}
              </div>
              <div>
                <h3 className={`${classes.heading} mb-3`}>Booking With</h3>
                {longerCard.map((item) => (
                  <div
                    className={`card d-flex flex-row align-items-start justify-content-between  ${classes.card}`}
                  >
                    <div className={`d-flex ${classes.innercard} `}>
                      <img className="me-2" src={item.img} />
                      <h1 className={` mt-2  ${classes.card_head}`}>
                        {item.h1}
                      </h1>
                      <span
                        className={`${classes.card_p} ${classes.card_head}  mx-3 fw-light mt-2 `}
                      >
                        {item.role}
                      </span>
                    </div>
                    <a href="/" className={`text-end ${classes.card_head}`}>
                      View Details
                    </a>
                  </div>
                ))}
              </div>
              <h3 className={`${classes.heading} mb-3`}>Attendees</h3>
              <div className={classes.card_div}>
                {" "}
                {cardData.map((element) => (
                  <CardComponent
                    img={element.img}
                    h1={element.h1}
                    card_cls={classes.card_class}
                  />
                ))}
              </div>
              <h3 className={`${classes.heading} mb-3`}>Session type</h3>
              <CardComponent
                h1={"Individual Sessions"}
                card_cls={classes.card_txt}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="modal_cancelbtn" onClick={handleClose}>
              Cancel
            </button>
            <button className="modal_addbtn" onClick={handleSubmit}>
              Start Sessions
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default SessionDetails;
