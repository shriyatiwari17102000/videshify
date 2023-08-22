import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";

function AddSupport({ show, handleClose }) {
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
            <Modal.Title className="modal_title">
              Add Custom Booking
            </Modal.Title>
          </Modal.Header>
          <p className="modal_para p_mj">
            Add a custom booking and send to the student for the payment
          </p>
          <Modal.Body>
            <form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Category</Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="modal_label">
                      Select Category
                    </Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option></option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="modal_label"> Query</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
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

export default AddSupport;
