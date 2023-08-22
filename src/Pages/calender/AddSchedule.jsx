import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function AddSchedule({ show, handleClose }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <div style={{ padding: "20px" }}>
          <Modal.Header
            style={{ borderBottom: "none", marginTop: "-8px" }}
            closeButton
          >
            <Modal.Title className="modal_title">Add Schedule</Modal.Title>
          </Modal.Header>
          <p className="modal_para">You can Add a schedule meeting</p>
          <Modal.Body className="modal_bdy">
            <form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      Booking With
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      Session Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Date</Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Start Time</Form.Label>
                    <Form.Control
                      type="text"
                      style={{ width: "231px" }}
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col style={{ marginLeft: "-242px" }}>
                  <Form.Group>
                    <Form.Label className="modal_label">End Time</Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      style={{ width: "231px" }}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Type</Form.Label>
                    <button
                      className="s1"
                      onClick={() => setSelectedOption("option1")}
                    >
                      <input
                        type="radio"
                        className="radio_input"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleOptionChange}
                      />
                      Individual Session
                    </button>
                  </Form.Group>
                </Col>
                <Col style={{ marginTop: "58px" }}>
                  <Form.Group>
                    <button
                      className="s1"
                      onClick={() => setSelectedOption("option2")}
                    >
                      <input
                        type="radio"
                        className="radio_input"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOptionChange}
                      />
                      Recurring Sessions
                    </button>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Label className="modal_label">Description</Form.Label>
              <Form.Control type="text" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal_cancelbtn" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="modal_addbtn" onClick={handleSubmit}>
              Add Research{" "}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default AddSchedule;
