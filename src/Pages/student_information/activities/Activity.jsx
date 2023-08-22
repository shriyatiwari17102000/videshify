import React, { useState } from "react";
import styles from "./activities.module.css";
import { LuEdit2 } from "react-icons/lu";
import { RiAddCircleLine } from "react-icons/ri";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import StudentNav from "../StudentNav";
import Navbar from "../../../components/navbar/Navbar";
import activity_icon from "../../../images/activity_icon.png";
import activity_women from "../../../images/activity_women.png";
import AddActivityModal from "./AddActivityModal";
import AddInternshipModal from "./AddInternshipModal";
import "../../customcss/custom.css";

const Activity = () => {
  const [show, setShow] = useState(false);
  const [openInternshipModal, setOpenInternshipModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseInternship = () => setOpenInternshipModal(false);
  const handleOpenInternship = () => setOpenInternshipModal(true);

  return (
    <>
      <div className="right-aside">
       
        {/* -----------BreadcrumbSection---------- */}

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

        <StudentNav activeLink={"studentinfo/activities"} />

        {/* -----------testingSection---------- */}

        <Container className={styles.container_activity}>
          <Row className={styles.academictabsection}>
            <Col className="p-0">
              <div className={styles.leftSection}>
                <h6>Activities</h6>
                <div className={styles.progress}>
                  <div>
                    <p>02</p>
                    <span>In Progress</span>
                  </div>
                  <div>
                    <p>01</p>
                    <span>Planned</span>
                  </div>
                  <div className={styles.lastpara}>
                    <p>00</p>
                    <span>Complete</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <div className={styles.RightSection}>
                <img
                  src={activity_women}
                  alt="manlogo"
                  className={styles.manlogo}
                />
              </div>
            </Col>
            <Col md={12} className="p-0">
              <div className={styles.acdemicSection}>
                <div className={styles.education}>
                  <div>
                    <h6>Extracurricular Activities</h6>
                    <p>You can see a student’s Extracurricular Activities</p>
                  </div>
                  <div>
                    <button onClick={handleShow}>
                      <RiAddCircleLine size={14} /> Add Activity
                    </button>
                  </div>
                </div>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6 className="pt-1">
                        <img src={activity_icon} alt="columns" /> &nbsp;
                        “Activity Title”
                      </h6>
                      <p className={styles.para}>
                        Community Service (Volunteer)
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.activites_box}>
                        <div>
                          <p>Start Date</p>
                          <span>28/8/2023</span>
                        </div>
                        <div>
                          <p>End Date</p>
                          <span>28/9/2023</span>
                        </div>
                        <div>
                          <p>Organization name</p>
                          <span>Nishant</span>
                        </div>
                        <div>
                          <p>Time Of Participation</p>
                          <span>During School</span>
                        </div>
                        <div>
                          <p>Position/Leadership</p>
                          <span>Participant</span>
                        </div>
                        <div>
                          <p>School Year</p>
                          <span>2018</span>
                        </div>
                      </div>
                      <div className={styles.activites_box_2}>
                        <div>
                          <p>Weeks Per Year</p>
                          <span>12</span>
                        </div>
                        <div>
                          <p>Hours Per Week</p>
                          <span>20</span>
                        </div>
                      </div>
                      <div className={styles.description}>
                        <h6>Description</h6>
                        <p>
                          Borem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className={styles.edit_curr_div}>
                        <button className={styles.edit_curr}>
                          <LuEdit2 size={12} className={styles.editicon} /> Edit
                          Details
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="my-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6 className="pt-1">
                        <img src={activity_icon} alt="columns" /> &nbsp;
                        “Activity Title”
                      </h6>
                      <p className={styles.para}>
                        Community Service (Volunteer)
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.activites_box}>
                        <div>
                          <p>Start Date</p>
                          <span>28/8/2023</span>
                        </div>
                        <div>
                          <p>End Date</p>
                          <span>28/9/2023</span>
                        </div>
                        <div>
                          <p>Organization name</p>
                          <span>Nishant</span>
                        </div>
                        <div>
                          <p>Time Of Participation</p>
                          <span>During School</span>
                        </div>
                        <div>
                          <p>Position/Leadership</p>
                          <span>Participant</span>
                        </div>
                        <div>
                          <p>School Year</p>
                          <span>2018</span>
                        </div>
                      </div>
                      <div className={styles.activites_box_2}>
                        <div>
                          <p>Weeks Per Year</p>
                          <span>12</span>
                        </div>
                        <div>
                          <p>Hours Per Week</p>
                          <span>20</span>
                        </div>
                      </div>
                      <div className={styles.description}>
                        <h6>Description</h6>
                        <p>
                          Borem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className={styles.edit_curr_div}>
                        <button className={styles.edit_curr}>
                          <LuEdit2 size={12} className={styles.editicon} /> Edit
                          Details
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>

        {/* -----------IntershipSection---------- */}

        <Container className={styles.container_activity}>
          <Row>
            <Col className="p-0" md={12}>
              <div className={styles.intership_main}>
                <div className={styles.intership_main_box}>
                  <div>
                    <h6>Internship & Work Experience</h6>
                    <p>You can see a student’s Internship & Work Experience</p>
                  </div>
                  <div>
                    <button onClick={handleOpenInternship}>
                      <RiAddCircleLine size={14} /> Add Internship
                    </button>
                  </div>
                </div>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6 className="pt-1">
                        <img src={activity_icon} alt="columns" />{" "}
                        &nbsp;Internship Title
                      </h6>
                      <p className={styles.para}>Industry : Music</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.activites_box}>
                        <div>
                          <p>Start Date</p>
                          <span>28/8/2023</span>
                        </div>
                        <div>
                          <p>End Date</p>
                          <span>28/9/2023</span>
                        </div>
                        <div>
                          <p>Organization name</p>
                          <span>Nishant</span>
                        </div>
                        <div>
                          <p>Program Provider</p>
                          <span>High School</span>
                        </div>
                        <div>
                          <p>Application Deadline</p>
                          <span>28/8/2023</span>
                        </div>
                        <div>
                          <p>Position/title</p>
                          <span>Jr. software</span>
                        </div>
                      </div>

                      <div className={styles.editbtn}>
                        <button>
                          <LuEdit2 size={12} className={styles.editicon} /> Edit
                          Details
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="my-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6 className="pt-1">
                        <img src={activity_icon} alt="columns" />{" "}
                        &nbsp;Internship Title
                      </h6>
                      <p className={styles.para}>Industry : Music</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.activites_box}>
                        <div>
                          <p>Start Date</p>
                          <span>28/8/2023</span>
                        </div>
                        <div>
                          <p>End Date</p>
                          <span>28/9/2023</span>
                        </div>
                        <div>
                          <p>Organization name</p>
                          <span>Nishant</span>
                        </div>
                        <div>
                          <p>Program Provider</p>
                          <span>High School</span>
                        </div>
                        <div>
                          <p>Application Deadline</p>
                          <span>28/0/2023</span>
                        </div>
                        <div>
                          <p>Position/title</p>
                          <span>Jr . software</span>
                        </div>
                      </div>

                      <div className={styles.editbtn}>
                        <button>
                          <LuEdit2 size={12} className={styles.editicon} /> Edit
                          Details
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <AddActivityModal show={show} handleClose={handleClose} />
      <AddInternshipModal
        show={openInternshipModal}
        handleClose={handleCloseInternship}
      />
    </>
  );
};

export default Activity;
