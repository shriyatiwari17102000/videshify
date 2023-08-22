import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Card, Button, Form } from "react-bootstrap";
import "../customcss/custom.css";
import "./payment.css";
import PaymentChart from "./PaymentChart";
import PaymentDetail from "./PaymentDetail";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";
import OfflinePayment from "../../alltables/OfflinePayment";
import OnlinePayment from "../../alltables/OnlinePayment";

const Payment = () => {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);

  const switchComp = (number) => {
    switch (number) {
      case 0:
        return <OfflinePayment />;
      case 1:
        return <OnlinePayment />;
    }
  };

  const handleCloseOffcanvas = () => setShow(false);
  const handleShowOffcanvas = () => setShow(true);

 

  return (
    <>
      <div className="right-aside">
       
        <div>
          <p className="route_p" style={{ display: "flex" }}>
            <a
              href="/"
              className="route_p_dash"
              style={{ marginTop: "0" }}
            >
              Dashboard{" "}
            </a>
            <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
            <span className="route_p_home" style={{ marginTop: "5px" }}>
              Plan & Billing
            </span>
          </p>
        </div>

        {/* planning and billing card */}
        <div style={{ marginLeft: "13px" }}>
          {" "}
          <h1 className="payment_head">Plan & Billing</h1>
          <p className="payment_para">Manage your Plan & Billing Details</p>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "11px" }}>
            <Card className="pay-card">
              <Card.Body className="pay-card-body">
                <p className="pay-card-p">All Amount Received</p>
                <h1 className="pay-card-h">₹30,400</h1>
                <div className="icon">
                  <FiArrowUpRight className="pay-card-icon" />
                </div>
              </Card.Body>
              <Card.Body className="pay-card-body">
                <p className="pay-card-p">Most Recent Transaction</p>
                <h1 className="pay-card-h">₹3400</h1>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{
              width: "810px",
              height: "343px",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "1px solid #D9D9D9",
              background: "#FFF",
            }}
          >
            {" "}
            <PaymentChart />
          </div>
        </div>

        {/* card-section */}

        <div className="btn_container">
          <button
            onClick={() => setNum(0)}
            className={`${num === 0 ? "activepymnt" : ""}`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setNum(1)}
            className={`${num === 1 ? "activepymnt" : ""}`}
          >
            List View
          </button>
        </div>
        {switchComp(num)}
      </div>
      <PaymentDetail show={show} handleClose={handleCloseOffcanvas} />
    </>
  );
};

export default Payment;
