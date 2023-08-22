import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./booking.css";
import "../customcss/custom.css";

function ServiceModal({ show, handleClose }) {


  const leftCheckboxItems = [
    "Access to basic Feature",
    "General Counselling",
    "Test Preparation",
    "Essay Guidance",
    "Application",
  ];

  const rightCheckboxItems = [
    "Profile Creation",
    "Other Option",
    "Other Option 1",
    "Other Option 2",
  ];
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <div style={{ padding: "20px" }}>
          <Modal.Header style={{ borderBottom: "none" }} closeButton>
            <Modal.Title className="modal_title">Add Plan</Modal.Title>
          </Modal.Header>
          <p
            className="modal_para"
            style={{ color: "#7D7D7D", marginLeft: "15px" }}
          >
            You can create your service plan which user can opt
          </p>
          <Modal.Body className="modal_bdy">
            <form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      // className={styles.input_modal}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Plan Type</Form.Label>
                    <Form.Control
                      type="text"
                      // className={styles.input_modal}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      No Of Universities
                    </Form.Label>
                    <Form.Control
                      type="text"
                      // className={styles.input_modal}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row style={{ marginTop: "54px" }}>
                <Col sm="6">
                  <ul
                    style={{ listStyle: "none", marginLeft: "8px", padding: 0 }}
                  >
                    {leftCheckboxItems.map((item, index) => (
                      <li key={index} style={{ marginBottom: "25px" }}>
                        <Form.Check
                          type="checkbox"
                          className="custom-checkbox"
                          label={item}
                        />
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col sm="6">
                  <ul
                    style={{ listStyle: "none", marginLeft: "8px", padding: 0 }}
                  >
                    {rightCheckboxItems.map((item, index) => (
                      <li key={index} style={{ marginBottom: "25px" }}>
                        <Form.Check
                          className="custom-checkbox"
                          type="checkbox"
                          label={item}
                        />
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="modal_cancelbtn" onClick={handleClose}>
              Cancel
            </button>
            <button className="modal_addbtn" onClick={handleSubmit}>
              Add Plan{" "}
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default ServiceModal;
