import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import { BiFilter } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Tile from "../../components/Tile/Tile";
import StudentTable from "../../alltables/StudentTable";
import SupportTable from "../../alltables/SupportTable";
import AddSupport from "./AddSupport";

const c1_data = [
  {
    h4: "Last Ticket Raised",
    h1: "20 Jun",
    p: "   See here your last ticket raised",
  },
];
const c2_data = [
  {
    h4: "Pending Ticket",
    h1: "04",
    p: " See here your all open ticket",
  },
  {
    h4: "Resolved Ticket",
    h1: "12",
    p: "  See here all your Resolved ticket",
  },
];

const Support = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="right-aside">
      {/* <Navbar /> */}
      <p className="route_p">
        <span className="route_p_dash">Dashboard </span>
        <span>&gt;</span> <span className="route_p_home">Home</span>
      </p>
      {/* -------boxSection--------- */}
      <Container fluid className="pe-0">
        <Row className="w-100  px-0">
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
          <h1 className="stu_head">Support & Ticket</h1>
          <p className="stu_para">Manage your Plan & Billing Details </p>
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
            <button className="pymnt_filter_btn" onClick={handleOpen}>
              Add Ticket
            </button>
          </div>
        </div>
      </div>
      <SupportTable />
      <AddSupport show={show} handleClose={handleClose} />
    </div>
  );
};

export default Support;
