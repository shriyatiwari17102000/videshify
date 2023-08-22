import React, { useState } from "react";
import styles from "./academic.module.css";
import { LuEdit2 } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import StudentNav from "../StudentNav";
import Navbar from "../../../components/navbar/Navbar";
import AddAcademicModal from "./AddAcademicModal";
import AddResearchModal from "./AddResearchModa";
import AddPortfolio from "./AddPortfolio";
import calenderimg from "../../../images/calenderimg.png";
import man_img from "../../../images/man_img.png";
import "../../customcss/custom.css";
import AddAcademicDetails from "./AddAcademicDetails";

const Academics = () => {
  const [show, setShow] = useState(false);
  const [showAddSchool, setShowAddSchool] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPortfolioModel, setOpenPortfolioModel] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseAddSchool = () => setShowAddSchool(false);
  const handleShowAddSchool = () => setShowAddSchool(true);

  const handleCloseModal = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClosePortfolioModel = () => setOpenPortfolioModel(false);
  const handleOpenPortfolioModel = () => setOpenPortfolioModel(true);

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


        {/* ----------StudentTabs--------- */}
        <StudentNav activeLink={"studentinfo/academics"} />
        {/* ----------AcademicTabs--------- */}
        <div style={{ marginLeft: "20px" }}>
          <Container className="container_activity">
            <Row className={styles.academictabsection}>
              <Col className="p-0">
                <div className={styles.leftSection}>
                  <h6>Academics</h6>
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
                  <img src={man_img} alt="manlogo" className={styles.manlogo} />
                </div>
              </Col>
              <Col className="col-12 p-0">
                <div className={styles.acdemicSection}>
                  <div className={styles.education}>
                    <div>
                      <h6>Education Information</h6>
                      <p>
                        You can see a student’s education information such as
                        their school or university
                      </p>
                    </div>
                    <div>
                      <button onClick={handleShowAddSchool}>
                        <RiAddCircleLine size={14} /> Add School
                      </button>
                    </div>
                  </div>

                  {/* --------accordian-Section--------- */}

                  <div className={styles.academictable}>
                    <table>
                      <thead style={{ backgroundColor: "#f1f1f1" }}>
                        <tr>
                          <th>University</th>
                          <th>Country</th>
                          <th>Entry Date</th>
                          <th>Graduation Datess</th>
                          <th>Special Status</th>
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

          {/* ----------SchoolAcademicTabs--------- */}

          <Row className={styles.schoolmaintab}>
            <Col md={12} className="p-0">
              <div className={styles.schoolTab}>
                <div className={styles.schoolheader}>
                  <div>
                    <h6>School Academics</h6>
                    <p>You can see a student’s School Academics such </p>
                  </div>
                  <div>
                    <button onClick={handleShow}>
                      <RiAddCircleLine /> Add Academic Year
                    </button>
                  </div>
                </div>

                {/* ------SchoolAccordianSection----------- */}

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6>
                        Year 2 School Work &nbsp;
                        <FaRegCalendarCheck />
                      </h6>
                    </Accordion.Header>

                    <Accordion.Body>
                      <div className={styles.school_academic_section}>
                        <div>
                          <p>Class Size</p>
                          <span>50</span>
                        </div>
                        <div>
                          <p>Target Class Rank</p>
                          <span>Top 10% for 80+% courses</span>
                        </div>
                        <div>
                          <p>Actual Class Rank</p>
                          <span>Top 10% for 80+% courses</span>
                        </div>
                        <div>
                          <p>Transcript</p>
                          <span>
                            <a href="#">Download</a>
                          </span>
                        </div>
                        <div>
                          <p>GPA scale</p>
                          <span>4.5</span>
                        </div>
                        <div>
                          <p>Target scale</p>
                          <span>9.5</span>
                        </div>
                      </div>
                      <div className={styles.school_academic}>
                        <div>
                          <p>Actual GPA</p>
                          <span>8.6</span>
                        </div>
                        <div>
                          <p>Target Cumulative GPA</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>Cumulative GPA</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>GPA Weighting</p>
                          <span>yes</span>
                        </div>
                      </div>
                      <div className={styles.editbtn}>
                        <button>
                          <LuEdit2 /> Edit Details
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <br />
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6>
                        Year 3 School Work &nbsp;
                        <FaRegCalendarCheck />
                      </h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.school_academic_section}>
                        <div>
                          <p>Class Size</p>
                          <span>50</span>
                        </div>
                        <div>
                          <p>Target Class Rank</p>
                          <span>Top 10% for 80+% courses</span>
                        </div>
                        <div>
                          <p>Actual Class Rank</p>
                          <span>Top 10% for 80+% courses</span>
                        </div>
                        <div>
                          <p>Transcript</p>
                          <span>
                            <a href="#">Download</a>
                          </span>
                        </div>
                        <div>
                          <p>GPA scale</p>
                          <span>4.5</span>
                        </div>
                        <div>
                          <p>Target scale</p>
                          <span>9.5</span>
                        </div>
                      </div>
                      <div className={styles.school_academic}>
                        <div>
                          <p>Actual GPA</p>
                          <span>8.6</span>
                        </div>
                        <div>
                          <p>Target Cumulative GPA</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>Cumulative GPA</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>GPA Weighting</p>
                          <span>yes</span>
                        </div>
                      </div>
                      <div className={styles.editbtn}>
                        <button>
                          <LuEdit2 /> Edit Details
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <br />
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6>
                        Year 1 School Work &nbsp;
                        <FaRegCalendarCheck />
                      </h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.school_academic_section}>
                        <div>
                          <p>Class Size</p>
                          <span>50</span>
                        </div>
                        <div>
                          <p>Target Class Rank</p>
                          <span>Top 10% for 80+% courses</span>
                        </div>
                        <div>
                          <p>Actual Class Rank</p>
                          <span>Top 10% for 80+% courses</span>
                        </div>
                        <div>
                          <p>Transcript</p>
                          <span>
                            <a href="#">Download</a>
                          </span>
                        </div>
                        <div>
                          <p>GPA scale</p>
                          <span>4.5</span>
                        </div>
                        <div>
                          <p>Target scale</p>
                          <span>9.5</span>
                        </div>
                      </div>
                      <div className={styles.school_academic}>
                        <div>
                          <p>Actual GPA</p>
                          <span>8.6</span>
                        </div>
                        <div>
                          <p>Target Cumulative GPA</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>Cumulative GPA</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>GPA Weighting</p>
                          <span>yes</span>
                        </div>
                      </div>
                      <div className={styles.editbtn}>
                        <button>
                          <LuEdit2 /> Edit Details
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>

          {/* ----------ResearchTabs--------- */}

          <Row className={styles.researchmaintabs}>
            <Col className="p-0" md={12}>
              <div className={styles.researchtabs}>
                <div className={styles.researchHeader}>
                  <div>
                    <h6>Academic Research & Publications</h6>
                    <p>
                      You can see a student’s Academic Research & Publications
                    </p>
                  </div>
                  <div>
                    <button onClick={handleOpen}>
                      <RiAddCircleLine /> Add Research
                    </button>
                  </div>
                </div>

                {/* ------AccordianSection----------- */}

                <Accordion className="mt-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6 className="pt-2">
                        <img src={calenderimg} alt="columns" /> &nbsp; Research
                        Name
                      </h6>
                      <p className={styles.para}>Start Date 28/8/2023</p>
                      <p className={styles.para}>End Date 28/9/2023</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.research_section}>
                        <div>
                          <p>Research Field</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>Sub Field</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>Advisor</p>
                          <span>Nishant</span>
                        </div>
                        <div>
                          <p>Advisor Affiliation/University</p>
                          <span>DU</span>
                        </div>
                        <div>
                          <p>Pursuing Publication?</p>
                          <span>Yes</span>
                        </div>
                      </div>

                      <div className={styles.researchpaper}>
                        <h6>Research Paper</h6>
                        <div className={styles.document}>
                          <a href="#">Doc1.pdf</a>
                          <a href="#">Doc2.pdf</a>
                          <a href="#">Doc3.pdf</a>
                          <a href="#">Doc4.pdf</a>
                        </div>
                      </div>

                      <div className={styles.researchpaper}>
                        <h6>Research Question</h6>
                        <p>
                          Borem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="mt-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6 className="pt-2">
                        <img src={calenderimg} alt="columns" /> &nbsp; Research
                        Name
                      </h6>
                      <p className={styles.para}>Start Date 28/8/2023</p>
                      <p className={styles.para}>End Date 28/9/2023</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.research_section}>
                        <div>
                          <p>Research Field</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>Sub Field</p>
                          <span>--</span>
                        </div>
                        <div>
                          <p>Advisor</p>
                          <span>Nishant</span>
                        </div>
                        <div>
                          <p>Advisor Affiliation/University</p>
                          <span>DU</span>
                        </div>
                        <div>
                          <p>Pursuing Publication?</p>
                          <span>Yes</span>
                        </div>
                      </div>

                      <div className={styles.researchpaper}>
                        <h6>Research Paper</h6>
                        <div className={styles.document}>
                          <a href="#">Doc1.pdf</a>
                          <a href="#">Doc2.pdf</a>
                          <a href="#">Doc3.pdf</a>
                          <a href="#">Doc4.pdf</a>
                        </div>
                      </div>

                      <div className={styles.researchpaper}>
                        <h6>Research Question</h6>
                        <p>
                          Borem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>

          {/* ---------Creative-Portfolio----------- */}

          <Row className={styles.portfolio_main}>
            <Col className="p-0" md={12}>
              <div className={styles.portfolio_section}>
                <div className={styles.researchHeader}>
                  <div>
                    <h6>Creative Portfolios</h6>
                    <p>You can see a student’s Creative Portfolios</p>
                  </div>
                  <div>
                    <button onClick={handleOpenPortfolioModel}>
                      <RiAddCircleLine /> Add Research
                    </button>
                  </div>
                </div>

                {/* -------accordian-section-------- */}

                <Accordion className="mt-4" defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion_header">
                      <h6 className="pt-2">
                        <img src={calenderimg} alt="columns" /> &nbsp;
                        “Portfolio Name”
                      </h6>
                      <p className={styles.para}>Visual Art</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.portfolio_box}>
                        <div>
                          <p>Start Date</p>
                          <span>28/8/2018</span>
                        </div>
                        <div>
                          <p>End Date</p>
                          <span>28/9/2018</span>
                        </div>
                        <div>
                          <p>Program provider</p>
                          <span>University</span>
                        </div>
                        <div>
                          <p>Creative Portfolio</p>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                            }}
                          >
                            <a href="#">Doc1.pdf</a>
                            <a href="#">Doc2.pdf</a>
                            <a href="#">Doc3.pdf</a>
                            <a href="#">Doc4.pdf</a>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <AddAcademicModal show={show} handleClose={handleClose} />
      <AddResearchModal show={open} handleClose={handleCloseModal} />
      <AddPortfolio
        show={openPortfolioModel}
        handleClose={handleClosePortfolioModel}
      />
      <AddAcademicDetails
        show={showAddSchool}
        handleClose={handleCloseAddSchool}
      />
    </>
  );
};

export default Academics;
