import React from "react";
import "./student.css";
import { BsFilter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TiMessageTyping } from "react-icons/ti";
import { MdOutlineAddBox } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import stuinfo_img1 from "../../images/stuinfo_img1.png";
import stuinfo_img2 from "../../images/stuinfo_img2.png";
import stuinfo_img3 from "../../images/stuinfo_img3.png";
import stuinfo_img4 from "../../images/stuinfo_img4.png";
import stuinfo_img5 from "../../images/stuinfo_img5.png";
import stuinfo_img6 from "../../images/stuinfo_img6.png";
import nisha_stuinfo from "../../images/nisha_stuinfo.png";
import Navbar from "../../components/navbar/Navbar";
import { Card } from "react-bootstrap";

const StudentInformation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/studentinfo/academics");
  };
  const myData = [
    {
      images: stuinfo_img1,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img2,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img3,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img4,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img5,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img6,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img1,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img2,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
    {
      images: stuinfo_img3,
      name: "Nishant Choudhary",
      email: "nishant1@gmail.com",
      category: "Student",
      visit: "View Profile",
    },
  ];
  return (
    <div className="right-aside">
      {/* <div>
        <Navbar />
      </div> */}

      {/* ----------main-section-------- */}

      <Container fluid>
        <Row className="w-100 mt-2">
          <Col className="p-0" md={9} sm={12}>
            <div>
              <p className="route_p" style={{ display: "flex" }}>
                <a
                  href="/"
                  className="route_p_dash"
                  style={{ color: "black", marginTop: "0" }}
                >
                  Dashboard{" "}
                </a>
                <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
                <span className="route_p_home" style={{ marginTop: "5px" }}>
                  Student Information
                </span>
              </p>
            </div>
            <div className="filter-section">
              <p>
                <BsFilter className="filter-icon" /> Filter
              </p>
              <button>
                <MdOutlineAddBox className="filter-add" /> Add Student
              </button>
            </div>

            {/* ---------cardSection-------  */}

            <div className="mainsection">
              {myData.map((item) => {
                return (
                  <Card className="text-center stu_card_main">
                    <Card.Body>
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={item.images}
                        alt="images"
                      />
                      <Card.Title className="stu_card_title">
                        {item.name}
                      </Card.Title>
                      <Card.Text className="card_txt1">{item.email}</Card.Text>
                      <Card.Text className="card_txt2">
                        {item.category}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <h5 className="footer_txt" onClick={handleClick}>
                        {item.visit} &gt;
                      </h5>
                    </Card.Footer>
                  </Card>
                );
              })}
            </div>
          </Col>
          <Col md={3} className="pe-0">
            <div className="right-sidebar">
              <p>Student Overview</p>
              <div className="right-sidebar-overview">
                <img src={stuinfo_img1} alt="" />
                <p>Nishant Choudhary</p>
                <span>Nishant12@gmail.com</span>
              </div>
              <div className="primary-student">
                <img src={nisha_stuinfo} alt="image" />
                <span>Nisha Malviya</span>
              </div>
              <div className="primary-student-section">
                <p>
                  Primary Student &nbsp;&nbsp; <span>Success Manager</span>
                </p>
                <button>
                  <TiMessageTyping /> Message
                </button>
              </div>
              <div className="student-schedule">
                <h6>Next Schedule</h6>
                <div className="student-date-time">
                  <h1>06</h1>
                  <span>July, 2023</span>
                </div>
                <div className="student-description">
                  <p>
                    Type :- <span> Basic Counselling Session</span>
                  </p>
                  <p>
                    Subject :{" "}
                    <span>
                      {" "}
                      How to get an admission in overseas university{" "}
                    </span>
                  </p>
                  <p>
                    Description :{" "}
                    <span>
                      {" "}
                      Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </span>
                  </p>
                  <button>Reshedule Meeting</button>
                  <a href="#">See on Schedule</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentInformation;
