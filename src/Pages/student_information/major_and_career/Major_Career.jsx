import React, { useState } from "react";
import styles from "./mjorcareer.module.css";
import { LuEdit2 } from "react-icons/lu";
import { RiAddCircleLine } from "react-icons/ri";
import activity_icon from "../../../images/activity_icon.png";
import mj_woman from "../../../images/mj_woman.png";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import Navbar from "../../../components/navbar/Navbar";
import StudentNav from "../StudentNav";
import AddModal from "./AddModal";

const Major_Career = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleShow = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
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

        <StudentNav activeLink={"studentinfo/majorcareer"} />

        {/* -----------Major&CareerSection---------- */}
        <div style={{ marginLeft: "20px" }}>
          <Container>
            <Row className={styles.academictabsection}>
              <Col className="p-0">
                <div className={styles.leftSection}>
                  <h6>Majors & Careers</h6>
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
                    src={mj_woman}
                    alt="womanlogo"
                    className={styles.manlogo}
                  />
                </div>
              </Col>
              <Col md={12} className="p-0">
                <div className={styles.acdemicSection}>
                  <div className={styles.education}>
                    <div>
                      <h6>School Research & Preparation</h6>
                      <p>
                        You can see a student’s School Research & Preparation
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          handleShow(
                            "School Research & Preparation",
                            "You can add student’s School Research & Preparation"
                          )
                        }
                      >
                        <RiAddCircleLine size={14} /> Add Test
                      </button>
                    </div>
                  </div>

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6>
                          <img src={activity_icon} alt="columns" /> &nbsp;
                          “Mission Title”
                        </h6>
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
                        </div>
                        <div className={styles.description}>
                          <h6 className="pt-3">Description</h6>
                          <span>
                            Borem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                          </span>
                        </div>
                        <div className={styles.editbtn}>
                          <button>
                            <LuEdit2 size={12} className={styles.editicon} />{" "}
                            Edit Details
                          </button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion className="my-4" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6 className="pt-1">
                          <img src={activity_icon} alt="columns" /> &nbsp;
                          “Mission Tittle”
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
                        </div>
                        <div className={styles.description}>
                          <h6>Description</h6>
                          <span>
                            Borem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                          </span>
                        </div>
                        <div className={styles.editbtn}>
                          <button>
                            <LuEdit2 size={12} className={styles.editicon} />{" "}
                            Edit Details
                          </button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Container>

          {/* -----------ExplorationSection---------- */}

          <Container>
            <Row>
              <Col className="p-0" md={12}>
                <div className={styles.intership_main}>
                  <div className={styles.intership_main_box}>
                    <div>
                      <h6>Major, Career and Interest Exploration</h6>
                      <p>
                        You can see a student’s Major, Career and Interest
                        Exploration
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          handleShow(
                            "Major, Career and Interest Exploration",
                            "You can add student’s Major, Career and Interest Exploration"
                          )
                        }
                      >
                        <RiAddCircleLine size={14} /> Add Test
                      </button>
                    </div>
                  </div>

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6 className="pt-1">
                          <img src={activity_icon} alt="columns" />{" "}
                          &nbsp;“Mission Title”
                        </h6>
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
                        </div>
                        <div className={`pt-4 ${styles.description}`}>
                          <h6>Description</h6>
                          <span>
                            Borem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                          </span>
                        </div>
                        <div className={styles.editbtn}>
                          <button>
                            <LuEdit2 size={12} className={styles.editicon} />{" "}
                            Edit Details
                          </button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion className="my-4" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6 className="pt-1">
                          <img src={activity_icon} alt="columns" />{" "}
                          &nbsp;“Mission Title”{" "}
                        </h6>
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
                        </div>
                        <div className={`pt-4 ${styles.description}`}>
                          <h6>Description</h6>
                          <span>
                            Borem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                          </span>
                        </div>
                        <div className={styles.editbtn}>
                          <button>
                            <LuEdit2 size={12} className={styles.editicon} />{" "}
                            Edit Details
                          </button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Container>

          {/* -----------NetworkSection---------- */}

          <Container>
            <Row>
              <Col className="p-0" md={12}>
                <div className={styles.intership_main}>
                  <div className={styles.intership_main_box}>
                    <div>
                      <h6>Networking</h6>
                      <p>You can see a student’s Networking</p>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          handleShow(
                            "Networking",
                            "You can add student’s Networking"
                          )
                        }
                      >
                        <RiAddCircleLine size={14} /> Add Test
                      </button>
                    </div>
                  </div>

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6 className="pt-1">
                          <img src={activity_icon} alt="columns" />{" "}
                          &nbsp;“Mission Title”
                        </h6>
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
                        </div>
                        <div className={`pt-4 ${styles.description}`}>
                          <h6>Description</h6>
                          <span>
                            Borem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                          </span>
                        </div>
                        <div className={styles.editbtn}>
                          <button>
                            <LuEdit2 size={12} className={styles.editicon} />{" "}
                            Edit Details
                          </button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Accordion className="my-4" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h6 className="pt-1">
                          <img src={activity_icon} alt="columns" />{" "}
                          &nbsp;“Mission Title”{" "}
                        </h6>
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
                        </div>
                        <div className={`pt-4 ${styles.description}`}>
                          <h6>Description</h6>
                          <span>
                            Borem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                          </span>
                        </div>
                        <div className={styles.editbtn}>
                          <button>
                            <LuEdit2 size={12} className={styles.editicon} />{" "}
                            Edit Details
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
      </div>
      <AddModal
        show={show}
        title={modalTitle}
        content={modalContent}
        handleClose={handleClose}
      />
    </>
  );
};

export default Major_Career;
