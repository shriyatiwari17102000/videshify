import React, { useState } from "react";
import styles from "./personalinfo.module.css";
import { LuEdit2 } from "react-icons/lu";
import { BiPencil, BiMessageDots } from "react-icons/bi";
import { VscDiffAdded } from "react-icons/vsc";
import { Container, Row, Col, Input } from "react-bootstrap";
import Navbar from "../../../components/navbar/Navbar";
import StudentNav from "../StudentNav";
import prsnl_info from "../../../images/prsnl_info.png";
import file from "../../../images/file.png";
import AddKeyContacts from "./AddKeyContacts";
import { useNavigate } from "react-router-dom";
import Breadcrumbnav from "../../../components/navbar/Breadcrumbnav";

const PersonalInfo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/editinformation");
  };

  return (
    <>
      <div className="right-aside">
        {/* <div>
          <Navbar />
        </div> */}

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

        <StudentNav activeLink={"studentinfo/personalinfo"} />

        {/* -----------PersonalInfo_Section---------- */}
        <div style={{ marginLeft: "20px" }}>
          <Container>
            <Row>
              <Col className="p-0" md={8}>
                <div className={styles.main_container}>
                  <div className={styles.header_section}>
                    <h6>Personal Information</h6>
                  </div>
                  <div className={styles.personalinfo_mainbox}>
                    <div className={styles.basicinfo}>
                      <div>
                        <h6>Basic Information</h6>
                        <p>You can see a student’s Basic Information</p>
                      </div>
                      <button onClick={handleNavigate}>
                        <LuEdit2 /> Edit Basic Details
                      </button>
                    </div>
                    <div className={`row pt-2 ${styles.form_section}`}>
                      <div className="col-3">
                        <p>First Name</p>
                        <span>Satvik</span>
                      </div>
                      <div className="col-3">
                        <p>Middle Name</p>
                        <span>--</span>
                      </div>
                      <div className="col-3">
                        <p>Last Name</p>
                        <span>Kapoor</span>
                      </div>
                      <div className="col-3">
                        <p>City</p>
                        <span>Faridabad</span>
                      </div>
                    </div>
                    <div className={`row pt-4 ${styles.form_section}`}>
                      <div className="col-3">
                        <p>Preferred Name</p>
                        <span>Satvik</span>
                      </div>
                      <div className="col-3">
                        <p>Preferred Pronouns</p>
                        <span>My First Name</span>
                      </div>
                      <div className="col-3">
                        <p>Gender</p>
                        <span>Male</span>
                      </div>
                      <div className="col-3">
                        <p>Date of Birth</p>
                        <span>20/8/1999</span>
                      </div>
                    </div>
                    <div className={`row pt-4 ${styles.form_section}`}>
                      <div className="col-3">
                        <p>Location</p>
                        <span>India</span>
                      </div>
                      <div className="col-3">
                        <p>Timezone</p>
                        <span>GMT+05:30 Kolkata, India</span>
                      </div>
                      <div className="col-3">
                        <p>Meeting Availability</p>
                        <span>Monday</span>
                      </div>
                      <div className="col-3">
                        <p>State</p>
                        <span>Haryana</span>
                      </div>
                    </div>
                    <div className={`row pt-4 ${styles.form_section}`}>
                      <div className="col-5">
                        <p>Address 1</p>
                        <span>H-22 Sector 37 Faridabad, Haryana</span>
                      </div>
                    </div>
                    <div className={styles.bio}>
                      <p>Bio</p>
                      <span>
                        Hey hey! My name is Satvik Kapoor, and I am a high
                        school senior. If you ever want to talk about new ideas,
                        STEM, metal (Metallica), anime, origami, COD, or random
                        topics like "was Lionardo a feminist" I am your person.
                        I love meeting new people. Finding relations of economic
                        activities to psychology, physics, or computer science
                        has become a hobby.
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              {/* ----------RightSide_Section----------- */}

              <Col md={4}>
                <div className={styles.right_container}>
                  <div className={styles.profile_section}>
                    <img src={prsnl_info} alt="profile2" />
                    <div className={styles.pencil_icon}>
                      <BiPencil />
                    </div>
                  </div>
                  <div className={styles.herosection}>
                    <p>Nishant Choudhary</p>
                    <span>Nishant12@gmail.com</span>
                  </div>

                  <div className={styles.document_main}>
                    <div className={styles.add}>
                      <VscDiffAdded className={styles.plusicon} />
                    </div>
                    <h6>Onboarding Documents</h6>
                    <img src={file} alt="file" /> <span>CV (1).pdf</span>
                    <br />
                    <img src={file} alt="file" />{" "}
                    <span>Important Document.pdf</span>
                    <br />
                    <img src={file} alt="file" />{" "}
                    <span>Important Document1.pdf</span>
                  </div>

                  <div className={styles.myTeam}>
                    <h6>My Team</h6>
                    <div className={styles.editSection}>
                      <img src="/Images/student4.png" alt="student4" />
                      <div className={styles.name}>
                        <p>Nisha Malvia</p>
                        <span>Primary Student</span> &nbsp; &nbsp;
                        <span>Success Manager</span>
                      </div>
                    </div>
                    <div className={styles.msgBtn}>
                      <button>
                        <BiMessageDots /> Message
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              {/* ----------Application_Section-------------- */}

              <Col className="p-0" md={8}>
                <div className={styles.main_container1}>
                  <div className={styles.application}>
                    <div>
                      <h6>Applications</h6>
                      <p>You can see a student’s Application Information</p>
                    </div>
                    <button>
                      <LuEdit2 /> Edit Application
                    </button>
                  </div>
                  <div className={`row py-2 ${styles.form_section}`}>
                    <div className="col-3">
                      <p>Application Cycle</p>
                      <span>2023/2024</span>
                    </div>
                    <div className="col-3">
                      <p>Intended Major</p>
                      <span>Agriculture</span>
                    </div>
                    <div className="col-3">
                      <p>Recommended Majors</p>
                      <span>Kapoor</span>
                    </div>
                  </div>
                  <div className={styles.fiancial_section}>
                    <p>Financial Aid Needed</p>
                    <label className={styles.switch}>
                      <input type="checkbox" />
                      <span className={`rounded ${styles.slider}`} />
                    </label>
                  </div>
                  <div className={styles.hooksStatement}>
                    <p>Hook Statement</p>
                    <span>
                      interdisciplinary apprehension for economics, computer
                      science, and psychology{" "}
                    </span>
                  </div>
                </div>
              </Col>

              {/* ----------Contact_Details-------------- */}

              <Col className="p-0 my-3" md={8}>
                <div className={styles.main_container2}>
                  <div className={styles.application}>
                    <div>
                      <h6>Contact Details</h6>
                      <p>You can see a student’s contact Information</p>
                    </div>
                    <button>
                      <LuEdit2 /> Edit contact Details
                    </button>
                  </div>
                  <div className={`row py-2 ${styles.form_section}`}>
                    <div className="col-3">
                      <p>Phone</p>
                      <span>+917503063585</span>
                    </div>
                    <div className="col-4">
                      <p>Country of Current School</p>
                      <span>India</span>
                    </div>
                    <div className="col-3">
                      <p>Mailing Address</p>
                      <span>Nishant12@gmail.com</span>
                    </div>
                  </div>
                  <div className={styles.Demographics}>
                    <h6>Demographics</h6>
                    <p>You can see a student’s Demographics Information</p>
                  </div>
                  <div className={`row py-2 ${styles.form_section}`}>
                    <div className="col-4">
                      <p>Countries of Citizenship</p>
                      {/* <TagsBtn /> */}
                    </div>
                    <div className="col-4">
                      <p>Countries of Permanent Residency</p>
                      {/* <TagsBtn /> */}
                    </div>
                    <div className="col-3">
                      <p>Birthplace</p>
                      <span>India</span>
                    </div>
                  </div>
                  <div className={styles.hooksStatement}>
                    <p>English Proficiency</p>
                    <span>Fluent</span>
                  </div>
                  <div className={`py-5 ${styles.application}`}>
                    <div>
                      <h6>Key Contacts</h6>
                      <p>You can see a student’s Key Contact Information</p>
                    </div>
                    <button onClick={handleShow}>
                      <LuEdit2 /> Add Key Contacts
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <AddKeyContacts show={show} handleClose={handleClose} />
    </>
  );
};

export default PersonalInfo;
