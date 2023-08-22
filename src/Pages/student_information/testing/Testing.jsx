import React, { useState } from "react";
import styles from "./testing.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../../../components/navbar/Navbar";
import StudentNav from "../StudentNav";
import testing_man_img from "../../../images/testing_man_img.png";
import us_flag from "../../../images/uk_flag.png";
import uk_flag from "../../../images/uk_flag.png";
import AddTest from "./AddTest";

const Testing = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="right-aside">
        {/* <div>
          <Navbar />
        </div> */}

        {/* -----------NavigateSection---------- */}

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

        <StudentNav activeLink={"studentinfo/testing"} />

        {/* -----------testingSection---------- */}
        <div style={{ marginLeft: "19px" }}>
          <Container>
            <Row className={styles.academictabsection}>
              <Col className="p-0">
                <div className={styles.leftSection}>
                  <h6>Testing</h6>
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
              <Col className="col-6 p-0">
                <div className={styles.RightSection}>
                  <img
                    src={testing_man_img}
                    alt="manlogo"
                    className={styles.manlogo}
                  />
                </div>
              </Col>
              <Col className="col-12 p-0">
                <div className={styles.acdemicSection}>
                  <div className={styles.education}>
                    <div>
                      <h6>Testing Overview</h6>
                      <p>You can see a student’s Testing Overview</p>
                    </div>
                    <div>
                      <button onClick={handleShow}>
                        <RiAddCircleLine size={14} /> Add Test
                      </button>
                    </div>
                  </div>

                  {/* --------accordian-Section--------- */}

                  <div className={styles.academictable}>
                    <table>
                      <thead style={{ backgroundColor: "#f1f1f1" }}>
                        <tr>
                          <th>Test</th>
                          <th>Total Official Tests</th>
                          <th>Best Score in Single Test</th>
                          <th>Test Date</th>
                          <th>Target Achieved</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>
                          <td>--</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          {/* -----------box_Section---------- */}

          <Row className={styles.mainBox}>
            <Col className="p-0">
              <div className={styles.box_section}>
                <div className={styles.actSection}>
                  <div>
                    <h6>
                      US Undergraduate Test &nbsp;
                      <img src={us_flag} alt="UsFlag" />
                    </h6>
                    <p>ACT Official Test</p>
                  </div>
                  <div>
                    <HiDotsVertical size={26} className={styles.dot} />
                  </div>
                </div>
                <div className={styles.box_table}>
                  <div className={styles.main_box_test}>
                    <div>
                      <p>Start Date</p>
                      <span>20/8/2023</span>
                    </div>
                    <div>
                      <p>End Date</p>
                      <span>20/8/2023</span>
                    </div>
                    <div>
                      <p>Total Marks</p>
                      <span>100</span>
                    </div>
                    <div>
                      <p>Target</p>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* -----------Second-box-Section---------- */}

          <Row className={styles.mainBox}>
            <Col className="p-0">
              <div className={styles.box_section}>
                <div className={styles.actSection}>
                  <div>
                    <h6>
                      UK Undergraduate Test &nbsp;{" "}
                      <img src={uk_flag} alt="UsFlag" />
                    </h6>
                    <p>CAT Official Test</p>
                  </div>
                  <div>
                    <HiDotsVertical size={26} className={styles.dot} />
                  </div>
                </div>
                <div className={styles.box_table}>
                  <div className={styles.main_box_test}>
                    <div>
                      <p>Start Date</p>
                      <span>20/8/2023</span>
                    </div>
                    <div>
                      <p>End Date</p>
                      <span>20/8/2023</span>
                    </div>
                    <div>
                      <p>Total Marks</p>
                      <span>100</span>
                    </div>
                    <div>
                      <p>Target</p>
                      <span>100</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <AddTest show={show} handleClose={handleClose} />
    </>
  );
};

export default Testing;
