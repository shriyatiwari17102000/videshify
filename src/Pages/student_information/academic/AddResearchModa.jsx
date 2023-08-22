import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import styles from "./academic.module.css";

function AddResearchModal({ show, handleClose }) {
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <div>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header style={{ borderBottom: "none" }} closeButton>
          <Modal.Title className={styles.modal_title}>
            Academic Research & Publication
          </Modal.Title>
        </Modal.Header>
        <p className={styles.modal_para}>
          You can see a student’s Academic Research & Publications{" "}
        </p>
        <Modal.Body className={styles.modal_bdy}>
          <form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className={styles.modal_label}>
                    Research Field
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
                    Sub Field
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
                    Advisor
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
                    Advisor Affiliation/University
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
                    Pursuing Publication ?
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
                    Start Date
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
                    End Date{" "}
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
                    Research Paper
                  </Form.Label>
                  <Form.Control
                    type="file"
                    className={styles.file_css}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Label className={styles.modal_label}>
              Research Question
            </Form.Label>
            <Form.Control type="text" className={styles.modal_inputbtm} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.modal_cancelbtn} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.modal_addbtn} onClick={handleSubmit}>
            Add Research
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddResearchModal;
