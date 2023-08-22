import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import styles from "./activities.module.css";

function AddActivityModal({ show, handleClose }) {
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
            <Modal.Title className={styles.modal_title}>
              Extracurricular Activities
            </Modal.Title>
          </Modal.Header>
          <p className={styles.modal_para}>
            You can add student's Extracurricular ACtivities
          </p>
          <Modal.Body className={styles.modal_bdy}>
            <form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className={styles.modal_label}>
                      Activtiy Title
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
                      Category
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
                      Start Date
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
                      End Date
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
                      Organisation name
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
                      Time of Participation
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
                      Position/Leadership
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
                      School Year
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
                      Weeks Per Year
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
                      Hours Per Week
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
                    <Form.Label
                      className={`${styles.modal_label} ${styles.des}`}
                    >
                      Description{" "}
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
              Add Activity{" "}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default AddActivityModal;
