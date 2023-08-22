import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./student.css";

const StudentNav = ({ activeLink }) => {
  const tabs = [
    {
      name: "Academics",
      path: "studentinfo/academics",
    },
    {
      name: "Testing",
      path: "studentinfo/testing",
    },
    {
      name: "Activities",
      path: "studentinfo/activities",
    },
    {
      name: "Major & Careers",
      path: "studentinfo/majorcareer",
    },
    {
      name: "Personal info",
      path: "studentinfo/personalinfo",
    },
  ];

  return (
    <>
      <Row className="w-100" style={{ marginLeft: "7px" }}>
        <Col md={9} className="another-listNav">
          <ul>
            {tabs.map((item) => {
              return (
                <li>
                  {" "}
                  <Link
                    to={`/${item.path}`}
                    className={`studentTabs ${
                      activeLink === item.path ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default StudentNav;
