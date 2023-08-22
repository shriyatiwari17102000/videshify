import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import styles from "./testing.module.css";

function AddTest({ show, handleClose }) {
  const [testId, setTestId] = useState("");
  const [optionValue, setOptionValue] = useState("option1");
  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTestIdChange = (e) => {
    setTestId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <div style={{ padding: "20px" }}>
          <Modal.Header style={{ borderBottom: "none" }} closeButton>
            <Modal.Title className={styles.add_test_head}>Add Test</Modal.Title>
          </Modal.Header>
          <p className={styles.add_test_para}>
            You can add a test record or a test plan
          </p>
          <Modal.Body className={styles.modal_bdy}>
            <div style={{ height: "400px" }}>
              <form className={styles.add_test_form} onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <button
                        className={styles.s1}
                        onClick={() => setSelectedOption("option1")}
                      >
                        <input
                          type="radio"
                          className={styles.radio_input}
                          value="option1"
                          checked={selectedOption === "option1"}
                          onChange={handleOptionChange}
                        />
                        Official Test
                      </button>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <button
                        className={styles.s1}
                        onClick={() => setSelectedOption("option2")}
                      >
                        <input
                          type="radio"
                          className={styles.radio_input}
                          value="option2"
                          checked={selectedOption === "option2"}
                          onChange={handleOptionChange}
                        />
                        Mock Test
                      </button>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label className={styles.input_label}>
                        Test Name
                      </Form.Label>
                      <br />
                      <select
                        className={styles.input_box}
                        value={optionValue}
                        onChange={handleOptionChange}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className={styles.input_label}>
                        Test Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        className={styles.input_box}
                        name="datepic"
                        placeholder="DateRange"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Label className={styles.input_label}>
                  Target Score{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  className={styles.input_box}
                  name="test_id"
                  value={testId}
                  onChange={handleTestIdChange}
                  required
                />
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer className="mdl_footer">
            <Button className={styles.modal_cancelbtn} onClick={handleClose}>
              Cancel
            </Button>
            <Button className={styles.modal_addbtn} onClick={handleSubmit}>
              Add Test
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default AddTest;
