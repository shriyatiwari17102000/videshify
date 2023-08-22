import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import user_img from "../../../images/user_img.png";
import styles from "./academic.module.css";
import StuAvatars from "../StuAvatar";

function AddAcademicDetails({ show, handleClose }) {
  const handleSubmit = () => {
    console.log("ttttttt");
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <div style={{ padding: "19px" }}>
          <Modal.Header style={{ borderBottom: "none" }}>
            <div style={{ display: "flex" }}>
              <Modal.Title className="modal_title">
                Year 2 School Work
              </Modal.Title>
              <button className={styles.planned_acedmic_btn}>Planned</button>
            </div>
          </Modal.Header>
          <p className="modal_para" style={{ color: "#7D7D7D" }}>
            Date 28/8/2023 &nbsp; to &nbsp; Date 28/9/2023
          </p>
          <Modal.Body className={styles.modal_bdy_add}>
            <form>
              <Form.Group>
                <Form.Label className={styles.activityhead_academic}>
                  Description
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.activityhead_academic}>
                  Assign Team Member
                </Form.Label>
                <StuAvatars />
              </Form.Group>

              <Form.Group>
                <Form.Label className={styles.activityhead_academic}>
                  Task
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Discuss and select subjects for this year"
                  className="input_modal"
                  required
                />
                <button className={styles.task_academic_btn}>Add Task</button>
              </Form.Group>

              <Form.Group>
                <Form.Label
                  className={styles.activityhead_academic}
                  style={{ marginTop: "45px", marginBottom: "30px" }}
                >
                  Reflections
                </Form.Label>
                <div style={{ display: "flex" }}>
                  <img src={user_img} className={styles.reflection_img} />
                  <Form.Control
                    type="text"
                    className="input_modal"
                    placeholder="Type Something..."
                    required
                  />
                </div>
              </Form.Group>

              <div>
                <h4 className={styles.activityhead_academic}>Activity log</h4>
                <div className={styles.activitylog_academic}>
                  <p>Nishant Created this mission</p>
                  <p>10:26 Am, 20/8/2023</p>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal_addbtn" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default AddAcademicDetails;
