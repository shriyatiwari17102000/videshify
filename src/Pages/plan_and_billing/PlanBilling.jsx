import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import plan_card_icon1 from "../../images/plan_card_icon1.png";
import { BsCheckLg } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BillingTable from "../../alltables/BillingTable";
import PurchaseCard from "./PurchaseCard";

const PlanBilling = () => {
  const data = [
    {
      text: "Basic",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, obcaecati omnis?",
      price: "$199",
      pricespan: "/monthly",
      listhead: "What's included",
    },
    {
      text: "Basic",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, obcaecati omnis?",
      price: "$199",
      pricespan: "/monthly",
      listhead: "What's included",
    },
    {
      text: "Basic",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, obcaecati omnis?",
      price: "$199",
      pricespan: "/monthly",
      listhead: "What's included",
    },
  ];

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/planbillupgrad");
  };

  const [toggleChecked, setToggleChecked] = useState(false);

  const handleToggleChange = () => {
    setToggleChecked((prevChecked) => !prevChecked);
  };


  // // switch components
  // const switchComp = (number) => {
  //   switch (number) {
  //     case 0:
  //       return <PurchaseCard />;
  //     case 1:
  //       return <PurchaseCard />;
  //   }
  // };

  return (
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
      <div className="plan-margin">
        <div className="head-plan-div">
          {" "}
          <div className="plan_title_div">
            <h1 className="payment_head">Plan & Billing</h1>
            <p className="payment_para">Manage your Plan & Billing Details</p>
          </div>
          <div className="monthly-annualy-div">
            <span style={{ marginRight: "18px" }}>Monthly</span>
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              checked={toggleChecked}
              onChange={handleToggleChange}
            />
            <span style={{ marginLeft: "10px" }}>Annualy</span>
          </div>
        </div>
        <div className="billing_div">
          {data.map((item) => {
            return (
              <Card className="plan_card">
                <div
                  style={{
                    display: "flex",
                    padding: "27px",
                    paddingTop: "36px",
                  }}
                >
                  <div className="plan_img_div">
                    <Card.Img variant="top" src={plan_card_icon1} />
                  </div>{" "}
                  <div className="head_plan_div">
                    {item.text} <p className="head_plan_div_para">Pro</p>
                  </div>
                </div>
                <Card.Body style={{ padding: "29px" }}>
                  <Card.Text className="plan_para">{item.para}</Card.Text>
                  <Card.Text className="plan_para_price">
                    {item.price}
                    <span className="plan_para_price_span">
                      {item.pricespan}
                    </span>
                  </Card.Text>
                  <h5 className="plan_para_price_h5">{item.listhead}</h5>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      marginBottom: "30px",
                      marginTop: "18px",
                    }}
                  >
                    <li className="plan_li">
                      <BsCheckLg className="plan_li_icon" />
                      All analytics features
                    </li>
                    <li className="plan_li">
                      <BsCheckLg className="plan_li_icon" />
                      Up to 1,000,000 tracked visits
                    </li>
                    <li className="plan_li">
                      <BsCheckLg className="plan_li_icon" />
                      Premium support
                    </li>
                    <li className="plan_li">
                      <BsCheckLg className="plan_li_icon" />
                      Up to 10 team members
                    </li>
                  </ul>
                  <button className="plan_btn" onClick={handleNavigate}>
                    Current plan
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>

        {/* table section */}
        <div className="plan_title_div">
          {" "}
          <h1 className="stu_head">Student Details</h1>
          <p className="stu_para">See here your all students Details </p>
        </div>
        <BillingTable />
      </div>
    </div>
  );
};

export default PlanBilling;
