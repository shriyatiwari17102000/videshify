import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import BookingDashboard from "./BookingDashboard";
import add_plan from "../../images/add_plan.png";
import ServiceModal from "./ServiceModal";

const Services = () => {
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleCheckboxChange = (index) => {
    setCheckedIndex(index === checkedIndex ? null : index);
  };

  // Data for the cards
  const cardData = [
    {
      title: "Basic Plans",
      para: "Basic Plan and Basic Feature Best For Beginner Level",
      price: "₹1400",
      perMonth: "Per Month",
      features: [
        "Access to basic Feature",
        "10 University Covered In This Plan",
        "General Counselling",
        "Test Preparation",
      ],
      additionalFeatures: ["Essay Guidance", "Application", "Profile Creation"],
      isPopular: true,
    },
    {
      title: "Basic Plans",
      para: "Basic Plan and Basic Feature Best For Beginner Level",
      price: "₹1400",
      perMonth: "Per Month",
      features: [
        "Access to basic Feature",
        "10 University Covered In This Plan",
        "General Counselling",
        "Test Preparation",
      ],
      additionalFeatures: ["Essay Guidance", "Application", "Profile Creation"],
      isPopular: true,
    },
    {
      title: "Basic Plans",
      para: "Basic Plan and Basic Feature Best For Beginner Level",
      price: "₹1400",
      perMonth: "Per Month",
      features: [
        "Access to basic Feature",
        "10 University Covered In This Plan",
        "General Counselling",
        "Test Preparation",
      ],
      additionalFeatures: ["Essay Guidance", "Application", "Profile Creation"],
      isPopular: true,
    },
    // Add more objects here for other similar cards
  ];

  return (
    <>
      <div className="right-aside" style={{ padding: "0" }}>
        <BookingDashboard />
        <div style={{ marginTop: "-38rem" }}>
          <div style={{ margin: "0 0 40px 38px" }}>
            <button className="addplan" onClick={handleShow}>
              <img src={add_plan} />
              Add Plan
            </button>
          </div>

          <div className="service_div">
            {cardData.map((data, index) => (
              <Card key={index} className="service_card">
                <Card.Header style={{ backgroundColor: "white" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h4 className="web_head">{data.title}</h4>
                      <p className="web_para">{data.para}</p>
                    </div>
                    <div>
                      <h4 className="service_right_head">
                        <span className="service_span">{data.price}</span>
                        {data.perMonth}
                      </h4>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h4 className="service_innhead">Features</h4>
                      <p className="service_innpara">
                        Everything In Our Basic Plan
                      </p>
                    </div>
                    {data.isPopular && (
                      <button className="right_service_btn">
                        Popular Plan
                      </button>
                    )}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* Left Side */}
                    <div style={{ flex: 1 }}>
                      <ul className="service_ul">
                        {data.features.map((feature, idx) => (
                          <li key={idx} className="service_li">
                            <input
                              type="checkbox"
                              className="input_check"
                              checked={checkedIndex === index}
                              onChange={() => handleCheckboxChange(index)}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Right Side */}
                    <div style={{ flex: 1, marginLeft: "80px" }}>
                      <ul className="service_ul">
                        {data.additionalFeatures.map((feature, idx) => (
                          <li key={idx} className="service_li">
                            <input
                              type="checkbox"
                              className="input_check"
                              checked={checkedIndex === index}
                              onChange={() => handleCheckboxChange(index)}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="service_footer">
                  <button className="service_btn">Edit This Plan</button>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ServiceModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Services;
