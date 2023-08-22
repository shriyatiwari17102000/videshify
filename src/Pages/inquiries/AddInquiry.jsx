import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import "./inquiry.css";
import Navbar from "../../components/navbar/Navbar";

function AddInquiry() {
  return (
    <>
      <div className="right-aside">
        {/* <div>
          <Navbar />
        </div> */}

        <div className="status">
          <p>Dashboard &nbsp; &gt;</p> &nbsp;
          <p>Student Information</p>
        </div>

        {/* <StudentNav activeLink={"studentinfo/personalinfo"} /> */}

        {/* Edit section */}
        <Container className="main_div_edit ">
          <div>
          <div>
            <h1 className="modal_title ">Inquiry Details</h1>
            <p className="modal_para ">
              See here all your plans made up for students{" "}
            </p>
            
          </div>
          <button></button>
          </div>
         
          <Form className="inquiry_form">
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label modal-label">
                    Name
                  </Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label modal-label">
                    Email ID
                  </Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal-label modal_label">
                    Phone Number
                  </Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Category</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="modal_label">Date & Time</Form.Label>
                  <Form.Control type="text" className="input_modal" required />
                </Form.Group>
              </Col>
            </Row>
            <Row className="last-row">
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="modal_label ">Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <div className="inq-btn">
              <button className="modal_cancelbtn">Cancel</button>
              <button className="modal_addbtn">Resolve</button>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default AddInquiry;
