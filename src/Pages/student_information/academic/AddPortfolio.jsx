import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// import styles from "./academic.module.css";
import "../../customcss/custom.css";

function AddPortfolio({ show, handleClose }) {
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <div style={{ padding: "19px" }}>
          <Modal.Header
            style={{ borderBottom: "none", marginTop: "-19px" }}
            closeButton
          >
            <Modal.Title className="modal_title">
              Creative Portfolios{" "}
            </Modal.Title>
          </Modal.Header>
          <p className="modal_para">
            You can see a student’s Creative Portfolios{" "}
          </p>
          <Modal.Body className="modal_bdy">
            <form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      Portfolios Name
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
                    <Form.Label className="modal_label">Category</Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Start Date</Form.Label>
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
                    <Form.Label className="modal_label">End Date</Form.Label>
                    <Form.Control
                      type="text"
                      style={{ width: "228px" }}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group style={{ marginLeft: "-125px" }}>
                    <Form.Label className="modal_label">
                      Program Provider
                    </Form.Label>
                    <Form.Control
                      type="text"
                      style={{ width: "235px" }}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Label className="modal_label">Transcript</Form.Label>
              <Form.Control type="file" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal_cancelbtn" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="modal_addbtn" onClick={handleSubmit}>
              Add Portfolio{" "}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default AddPortfolio;
