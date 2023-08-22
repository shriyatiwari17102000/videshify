import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// import styles from "./mjorcareer.module.css";
import "../../customcss/custom.css";

function AddModal({ show, handleClose, title, content }) {
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <div style={{ padding: "20px" }}>
          <Modal.Header
            style={{ borderBottom: "none", marginTop: "-9px" }}
            closeButton
          >
            <Modal.Title className="modal_title">{title}</Modal.Title>
          </Modal.Header>
          <p className="modal_para p_mj">{content}</p>
          <Modal.Body className="modal_bdy">
            <form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">First Name</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Last Name</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Email</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="modal_label">Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal_cancelbtn" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="modal_addbtn" onClick={handleSubmit}>
              Add Contact
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default AddModal;
