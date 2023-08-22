import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import PurchaseCard from "./PurchaseCard";
import { BsCheckLg } from "react-icons/bs";
import plan_card_icon1 from "../../images/plan_card_icon1.png";

const PlanBillingUpgrade = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);

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

  const getCardColorClass = (index) => {
    const colors = ["card-pink", "card-cream", "card-gray", "card-purple"];
    return colors[index % colors.length];
  };

  const handleCheckboxChange = (index) => {
    setCheckedIndex(index === checkedIndex ? null : index);
  };
  return (
    <div className="right-aside">
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <p className="route_p">
          <span className="route_p_dash">Dashboard </span>
          <span>&gt;</span> <span className="route_p_home">Plan & Billing</span>
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "19px",
          }}
        >
          {data.map((item, index) => {
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
                  <button
                    className="plan_btn"
                    onClick={() => handleCheckboxChange(index)}
                  >
                    Current plan
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        {checkedIndex !== null && (
          <div className="purchase-card-container">
            <PurchaseCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanBillingUpgrade;
