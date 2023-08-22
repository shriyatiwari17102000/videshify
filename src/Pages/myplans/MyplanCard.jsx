import React from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./myplan.css";
import { BsCheckLg } from "react-icons/bs";

const MyplanCard = () => {
  const data = [
    {
      header: "Career Counseling ",
      badge: "New",
      price: "₹600-₹1000",

      listhead: "What’s Include in Career Counseling",
    },
    {
      header: "Career Counseling ",
      badge: "New",
      price: "₹600-₹1000",

      listhead: "What’s Include in Career Counseling",
    },
    {
      header: "Career Counseling ",
      badge: "New",
      price: "₹600-₹1000",

      listhead: "What’s Include in Career Counseling",
    },
  ];
  return (
    <div className="myplan-div">
      {data.map((item) => {
        return (
          <Card className="myplan_card">
            <Card.Header className="myplancard-header">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "11px 0 0",
                }}
              >
                <p className="plan_para_price_h5">{item.header}</p>
                <Badge className="badges ms-auto">{item.badge}</Badge>
              </div>
              <p className="myplan-p">{item.price}</p>
            </Card.Header>
            <Card.Body>
              <Card.Text className="myplan_para_list">
                {item.listhead}
              </Card.Text>
              <ul className="myplan-ul">
                <li className="myplan_para_list">
                  {" "}
                  <BsCheckLg className="plan_li_icon" />
                  Access to basic Feature
                </li>
                <li className="myplan_para_list">
                  {" "}
                  <BsCheckLg className="plan_li_icon" />
                  Access to basic Feature
                </li>
                <li className="myplan_para_list">
                  {" "}
                  <BsCheckLg className="plan_li_icon" />
                  Access to basic Feature
                </li>
                <li className="myplan_para_list">
                  {" "}
                  <BsCheckLg className="plan_li_icon" />
                  Access to basic Feature
                </li>
                <li className="myplan_para_list">
                  {" "}
                  <BsCheckLg className="plan_li_icon" />
                  Access to basic Feature
                </li>
                <li className="myplan_para_list">
                  {" "}
                  <BsCheckLg className="plan_li_icon" />
                  Access to basic Feature
                </li>
              </ul>
            </Card.Body>
            <Card.Footer className="text-muted myplan-footer">
              <span style={{ color: "black" }}>056</span> Students purchase this
              plan
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default MyplanCard;
