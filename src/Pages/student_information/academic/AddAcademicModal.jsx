import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import styles from "./academic.module.css";

function AddAcademicModal({ show, handleClose }) {
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header style={{ borderBottom: "none" }} closeButton>
          <Modal.Title className={styles.modal_title}>
            School Academics
          </Modal.Title>
        </Modal.Header>
        <p className={styles.modal_para}>
          You can see a student's School Academics such
        </p>
        <Modal.Body className={styles.modal_bdy}>
          <form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Class Size
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Target Class Rank
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Actual Class Rank
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    GPA scale
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Target GPA
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Actual GPA
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Target Cumulative GPA
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Cumulative GPA
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    GPA Weighting
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.input_modal}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Label className={styles.modal_label}>Transcript</Form.Label>
            <Form.Control type="file" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.modal_cancelbtn} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.modal_addbtn} onClick={handleSubmit}>
            Add Research{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddAcademicModal;
