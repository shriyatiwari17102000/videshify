import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import { BiFilter } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Tile from "../../components/Tile/Tile";
import StudentTable from "../../alltables/StudentTable";

const c1_data = [
  {
    h4: "  Total Students",
    h1: "078",
    p: "   See here your total no of students that Purchase your any plans",
  },
];
const c2_data = [
  {
    h4: "Recent Added",
    h1: "56",
    p: " See here your Recently added students",
  },
  {
    h4: "Upcoming Sessions",
    h1: "56",
    p: "  See here your total amount remains against for sessions",
  },
];

const StudentDashboard = () => {
  return (
    <div className="right-aside">
      {/* <Navbar /> */}
      <p className="route_p">
        <span className="route_p_dash">Dashboard </span>
        <span>&gt;</span> <span className="route_p_home">Home</span>
      </p>
      {/* -------boxSection--------- */}
      <Container fluid className="pe-0">
        <Row className="w-100  mt-n1 px-0">
          <Col sm={12} md={4}>
            <Tile data={c1_data} />
          </Col>
          <Col sm={12} md={8} className="d-flex">
            <Tile data={c2_data} />
          </Col>
        </Row>
      </Container>
      {/*  */}
      <div
        style={{
          display: "flex",
          marginTop: "78px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "10px", marginTop: "-3rem" }}>
          {" "}
          <h1 className="stu_head">Student Details</h1>
          <p className="stu_para">See here your all students Details </p>
        </div>
        <div
          className="search-container"
          style={{ display: "flex", marginTop: "-13px" }}
        >
          <input
            type="text"
            className="pymnt_searchbox"
            placeholder="Search by Name"
          />
          <span className="search-icon">
            <FiSearch />
          </span>
          <div style={{ margin: "-2px 42px 57px 13px" }}>
            <button className="stu_dlt_btn">Delete Student</button>
          </div>
        </div>
      </div>
      <StudentTable />
    </div>
  );
};

export default StudentDashboard;
