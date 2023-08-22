import React from "react";
import "./dashboard.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import VerticalBarChart from "./ReactChart";
import { FiArrowUpRight } from "react-icons/fi";
import Tile from "../../components/Tile/Tile";

const c1_data = [
  {
    h4: "Lorem Ipsum",
    h1: "15000",
    p: "lorem ipsum hello world hello programming",
  },
];

const c2_data = [
  {
    h4: "Lorem Ipsum",
    h1: "15000",
    p: "lorem ipsum hello world hello programming",
  },
  {
    h4: "Lorem Ipsum",
    h1: "15000",
    p: "lorem ipsum hello world hello programming",
  },
];
const c3_data = [
  {
    h4: "Lorem Ipsum",
    h1: "15000",
    p: "",
  },
];
const c4_data = [
  {
    h4: "Lorem Ipsum",
    h1: "15000",
    p: "lorem ipsum hello world hello programming",
  },
  {
    h4: "Lorem Ipsum",
    h1: "15000",
    p: "lorem ipsum hello world hello programming",
  },
];

const Dashboard = () => {
  return (
    <div className="right-aside">
      <p className="route_p">
        <span className="route_p_dash">Dashboard </span>
        <span>&gt;</span> <span className="route_p_home">Home</span>
      </p>
      {/* -------boxSection--------- */}

      <Container fluid className="pe-0">
        <Row className="w-100  px-0">
          <Col sm={12} md={4}>
            <Tile
              data={c1_data}
              // show={'exist'}
              // show2={"jkjkja"}
            />
          </Col>

          <Col sm={12} md={8} className="d-flex">
            <Tile data={c2_data} />
          </Col>

          <Col sm={12} md={8} className="chart_main_div">
            <VerticalBarChart />
          </Col>
          <Col sm={12} md={4} className="studentinformation">
            <div className="studentnumber">
              <div className="studentdata">
                <p>Total No Student</p>
                <h6>3847</h6>
                <div className="icon">
                  <FiArrowUpRight style={{ fontSize: "20px" }} />
                </div>
              </div>
              <div className="studentcounsil">
                <p>All Counselor</p>
                <h6>56</h6>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} className="mt-4">
            <Tile
              data={c3_data}
              cls={"my_class"}
              // show={'exist'}
              // show2={"jkjkja"}
            />
          </Col>

          <Col sm={12} md={8} className="d-flex mt-4">
            <Tile data={c4_data} cls={"my_class2"} />
          </Col>
        </Row>
      </Container>
      {/* ------------ */}
      {/* <Container fluid>
        <Row></Row>
      </Container> */}

      {/* ---------lower-box-Section------------- */}
      {/* <Container fluid className="pe-0">
        <Row className="w-100 mt-5 px-0"></Row>
      </Container> */}
    </div>
  );
};

export default Dashboard;
