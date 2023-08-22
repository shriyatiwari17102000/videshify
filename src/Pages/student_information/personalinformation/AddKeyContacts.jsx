import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import styles from "./personalinfo.module.css";

function AddKeyContacts({ show, handleClose }) {
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header style={{ borderBottom: "none" }} closeButton>
          <Modal.Title className={styles.modal_title}>Key Contacts</Modal.Title>
        </Modal.Header>
        <p className={styles.modal_para}>
          You can add student's Key Contacts Information
        </p>
        <Modal.Body className={styles.modal_bdy}>
          <form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>Email</Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Relationship
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    English Proficiency
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Occupation
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Timezone
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Primary Contact
                  </Form.Label>
                  <Form.Control
                    type="text"
                    // className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.modal_cancelbtn} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.modal_addbtn} onClick={handleSubmit}>
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddKeyContacts;
