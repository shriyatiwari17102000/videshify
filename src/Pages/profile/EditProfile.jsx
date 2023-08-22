import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import styles from "./profile.module.css"
import AddTeam from "./AddTeam";

function EditProfile() {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
  return (
    <div>
      <div className="right-aside">
      

      <div>
        <p className="route_p" style={{ display: "flex" }}>
          <a href="/" className="route_p_dash" style={{ marginTop: "0" }}>
            Dashboard{" "}
          </a>
          <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
          <span className="route_p_home" style={{ marginTop: "5px" }}>
            Profile
          </span>
        </p>
      </div>

        {/* <StudentNav activeLink={"studentinfo/personalinfo"} /> */}

        {/* Edit section */}
       
         
          <Container fluid className="pe-0 mt-5">
          <h1 className="modal_title ">Edit Profile</h1>
          <p className="modal_para ">
            See here your all Details and edit them
          </p>
          <div className={`${styles.edit_profile_div} mt-5`}>
            <Form className={styles.edit_form}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Individual or agency</Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Name of agency</Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Email ID</Form.Label>
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
                    <Form.Label className="modal_label">
                    Phone number
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
                    <Form.Label className="modal_label">Education level degree(university name)</Form.Label>
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
                     Number of previous students admitted
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={4}>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      Number of years as a counselor
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col sm={12} md={4}>
                  <Form.Group>
                    <Form.Label className="modal_label">City</Form.Label>
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
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="modal_label ">About</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
              </Row>

              {/*  */}
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                     Services Provided
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
                    <Form.Label className="modal_label"></Form.Label>
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
                      
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={4}>
                  <Form.Group>
                    <Form.Label className="modal_label">
                     
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="input_modal"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12}>
                  <Form.Label className="modal_label">Intro Video</Form.Label>
                  <Form.Control type="file" />
                </Col>
                <Col sm={12} md={12} className="mt-3">
                  <Form.Label className="modal_label">Testimonial</Form.Label>
                  <Form.Control type="file" />
                </Col>
              </Row>
              <div className="mt-4">
                <button className="pymnt_filter_btn">Add File</button>
              </div>
              <div>
                <h4 className="modal_label">My Team Details</h4>
                <button className={styles.addteam_btn} onClick={handleShow}>+</button>
              </div>
            </Form>
        </div>
          </Container>
      </div>
      <AddTeam show={show} handleClose={handleClose} />
    </div>
  );
}

export default EditProfile;
