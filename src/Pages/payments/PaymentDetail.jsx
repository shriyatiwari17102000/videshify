import React, { useState } from "react";
import { Button, Card, Col, Modal, Offcanvas, Row } from "react-bootstrap";
import user_img from "../../images/user_img.png";

const MyComponent = ({ show, handleClose }) => {
  return (
    <>
   

      {/* Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "447px" }}
        placement="end"
      >
        <Offcanvas.Header closeButton className="modal-header-left">
          <Offcanvas.Title className="pymentdetail_title">
            {" "}
            Transaction ID.
            <span className="pymentdetail_title pdt_color">#68989029334</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr style={{ marginLeft: "0px", width: "94%" }} />
        <Offcanvas.Body>
          <Card style={{ border: "none", boxShadow: "inherit" }}>
            <Row>
              <Col className="col_pymnt_div">
                <Card.Img
                  src={user_img}
                  alt="Customer"
                  className="rounded-circle pymntdetail_img "
                  style={{ width: "61px", height: "61px" }}
                />
                <div className="customer_div">
                  <span className="customer_div_p ">Customer Name</span>
                  <br />
                  <span className="customer_div_p customer_div_p2">
                    Anvik Meha
                  </span>
                </div>
                <Card.Link
                  href="#"
                  className="text-primary float-right pymnt_link "
                >
                  More Info
                </Card.Link>
              </Col>

              <Card.Body>
                <h6 className="customer_div_p" style={{ marginLeft: "10px" }}>
                  Customer Address
                </h6>
                <p
                  className="customer_div_p customer_div_p2"
                  style={{ marginLeft: "10px" }}
                >
                  H-11 New Delhi India
                </p>
                <div style={{ display: "flex" }}>
                  <p
                    className="customer_div_p customer_div_p2"
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    +91 7503063585
                  </p>
                  <p
                    className="customer_div_p customer_div_p2"
                    style={{ marginLeft: "39px" }}
                  >
                    {" "}
                    Nishant@gmail.com
                  </p>
                </div>
              </Card.Body>
            </Row>
          </Card>
          <hr className="hr_pymnt" />

          <Card style={{ border: "none", boxShadow: "inherit" }}>
            <Card.Body>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title className="pymnt_schedule_title">
                  Schedule
                </Card.Title>
                <Card.Link
                  href="#"
                  className="text-primary float-right pymnt_link "
                  style={{ marginTop: "-3px" }}
                >
                  More Info
                </Card.Link>
              </div>
              <h4 className=" pymnt_schedule_head">
                06 <span className="pymnt_schedule_spanhead"> July,2023</span>
              </h4>
              <Card.Text className="pymnt_schedule_txt">
                Type : Basic Counselling Session
              </Card.Text>
              <Card.Text className="pymnt_schedule_txt">
                Subject : How to get an admission in overseas university
              </Card.Text>
              <Card.Text className="pymnt_schedule_txt_main">
                <span className="pymnt_schedule_txt">Description :</span> Qorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </Card.Text>

              <button className="pymnt_schedule_btn">Reschedule Meeting</button>
            </Card.Body>
          </Card>
          <hr className="hr_pymnt" />

          <Card style={{ border: "none", boxShadow: "inherit" }}>
            <Card.Body>
              <Card.Title className="pymnt_schedule_title">Payment</Card.Title>
              <Card.Text className="pymnt_schedule_txt_main">
                <span className="pymnt_schedule_txt">Last Plan :</span> Basic
                Plan
              </Card.Text>
              <Card.Text className="pymnt_schedule_txt_main">
                <span className="pymnt_schedule_txt">Trasaction Number :</span>
                #68989029334
              </Card.Text>
              <Card.Text className="pymnt_schedule_txt_main">
                <span className="pymnt_schedule_txt">Payment Date :</span>{" "}
                20/8/2023
              </Card.Text>
              <Card.Text className="pymnt_schedule_txt_main">
                <span className="pymnt_schedule_txt">Next Cycle :</span>{" "}
                20/9/2023 (September)
              </Card.Text>
            </Card.Body>
          </Card>
          <hr className="hr_pymnt" />
          <footer
            style={{
              display: "flex",
              background: "none",
              justifyContent: "space-between",
            }}
          >
            <button className="modal_cancelbtn" onClick={handleClose}>
              Cancel
            </button>
            <button className="modal_addbtn" onClick={handleClose}>
              Download
            </button>
          </footer>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyComponent;
