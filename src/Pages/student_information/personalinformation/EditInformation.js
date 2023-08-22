import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./personalinfo.module.css";
import StudentNav from "../StudentNav";
import Navbar from "../../../components/navbar/Navbar";

function EditInformation() {
  return (
    <>
      <div className="right-aside">
        {/* <div>
          <Navbar />
        </div> */}

        <div>
          <p className="route_p" style={{ display: "flex" }}>
            <a
              href="/"
              className="route_p_dash"
        
            >
              Dashboard{" "}
            </a>
            <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
            <a
              href="/studentinfo"
              className="route_p_dash"
              
            >
              Student Information{" "}
            </a>
            <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
            <a className="route_p_dash " style={{ color: "black" }}>Student Profile</a>
          </p>
        </div>
        {/* Edit section */}
        <div className={styles.main_div_edit}>
          <div className={styles.edit_heading_div}>
            <h1 className={styles.edit_heading}>Edit Personal Information</h1>
          </div>
          <h1 className="modal_title pi_title">Edit Basic Information</h1>
          <p className="modal_para pi_para">
            You can see a student’s Basic Information{" "}
          </p>
          <Form className={styles.edit_form}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">First Name</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Middle Name</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Last Name</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">City</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Preferred Name
                  </Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Preferred Pronouns
                  </Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Gender</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Date of Birth</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Location</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Timezone</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Meeting Availability
                  </Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">State</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
            </Row>
            <div>
              <Form.Label className="modal_label">Address 1</Form.Label>
              <Form.Control type="text" />
              <Form.Label className="modal_label">Bio</Form.Label>
              <Form.Control type="text" />
            </div>
          </Form>
        </div>

        {/* Applications */}

        <div className={styles.main_div_edit}>
          <div>
            <h1 className="modal_title pi_title">Applications</h1>
            <p className="modal_para pi_para">
              You can see a student's Application Information
            </p>
          </div>
          <Form className={styles.edit_form}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Application Cycle
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Intended Major
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Recommended Majors
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Hook Statement</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
        {/* Contact Details */}
        <div className={styles.main_div_edit}>
          <div>
            <h1 className="modal_title pi_title">Applications</h1>
            <p className="modal_para pi_para">
              You can see a student’s Contact Information
            </p>
          </div>
          <Form className={styles.edit_form}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Phone</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Country of Current School
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">
                    Mailing Address
                  </Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
            </Row>

            {/*  */}
            <div>
              <div style={{ marginLeft: "-38px", marginTop: "60px" }}>
                <h1 className="modal_title pi_title"> Demographics</h1>
                <p className="modal_para pi_para">
                  You can see a student’s Demographics Information
                </p>
              </div>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      Countries of Citizenship
                    </Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      Countries of Permanent Residency
                    </Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">Birthplace</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="modal_label">
                      English Proficiency
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      style={{ width: "31%" }}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default EditInformation;
