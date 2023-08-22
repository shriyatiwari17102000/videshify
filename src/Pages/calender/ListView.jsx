import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./calender.css";
import { Button, ButtonGroup } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import list_calender from "../../images/list_calendar.png";
import list_clock from "../../images/list_clock.png";
import list_file from "../../images/list_file.png";
import list_file_btn from "../../images/list_file_btn.png";
import list_calender_btn from "../../images/list_calender_btn.png";
import { IoIosArrowForward } from "react-icons/io";

const ListView = () => {
  const [activeButton, setActiveButton] = useState("yourFiles");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  // Array of objects with date and cards
  const cardData = [
    {
      date: "Tue 20 June 2023",
      cards: [
        {
          id: 1,
          title: "Career Counseling",
          content:
            "Description : Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
          time: "10:00 Am to 10:30 Am",
          date: "Tue 20 June 2023",
        },
        {
          id: 2,
          title: "Career Counseling",
          content:
            "Description : Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
          time: "10:00 Am to 10:30 Am",
          date: "Tue 20 June 2023",
        },
      ],
    },
    {
      date: "Tue 30 June 2023",
      cards: [
        {
          id: 3,
          title: "Career Counseling",
          content:
            "Description : Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
          time: "10:00 Am to 10:30 Am",
          date: "Tue 20 June 2023",
        },
      ],
    },
    {
      date: "Tue 31 June 2023",
      cards: [
        {
          id: 4,
          title: "Career Counseling",
          content:
            "Description : Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
          time: "10:00 Am to 10:30 Am",
          date: "Tue 20 June 2023",
        },
      ],
    },
    // Add more objects for other dates and their respective cards
  ];

  return (
    <div className="right-aside">
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <p className="route_p" style={{ display: "flex" }}>
          <a href="/" className="route_home">
            Dashboard{" "}
          </a>
          <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
          <span className="route_home" style={{ marginTop: "5px", color: "black" }}>Counselors</span>
        </p>
      </div>

      {/* List view */}
      <div
        style={{
          marginLeft: "19px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <div>
          <h1 className="conselor_head">Counsellor Details</h1>
          <p className="conselor_para">
            See All Counselor and their details here
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "40px" }}>
          <button className="list_btn1">
            Calender View
            <img src={list_calender_btn} />
          </button>

          <button className="list_btn2">
            List View <img src={list_file_btn} />
          </button>
        </div>
      </div>
      <div
        className="card_div_conselor"
        style={{
          marginLeft: "19px",
          backgroundColor: "white",
          width: "1108px",
          height: "1163px",
        }}
      >
        <div className="card_div_conselor3" style={{ marginLeft: "22px" }}>
          <ButtonGroup
            aria-label="Basic example"
            style={{ width: "378px", height: "51px", marginTop: "52px" }}
          >
            <Button
              className={`custom-button ${
                activeButton === "allFiles" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("allFiles")}
            >
              Upcoming Sessions
            </Button>
            <Button
              className={`custom-button ${
                activeButton === "yourFiles" ? "active" : ""
              }`}
              style={{ width: "185px" }}
              onClick={() => handleButtonClick("yourFiles")}
            >
              Past Sessions
            </Button>
          </ButtonGroup>
          {cardData.map((item) => (
            <div key={item.date}>
              <h3 className="list_heading"> {item.date}</h3>
              <div>
                {item.cards.map((card) => (
                  <Card key={card.id} className="list_card">
                    <Card.Body className="list_card_bdy">
                      <Card.Title className="list_card_title">
                        {card.title}
                      </Card.Title>
                      <Card.Text className="list_card_para">
                        <img src={list_file} className="list_icon" />
                        <p> {card.content}</p>
                      </Card.Text>
                      <Card.Text className="list_card_para list_p2">
                        <div style={{ display: "flex" }}>
                          <p style={{ display: "flex" }}>
                            <img src={list_calender} className="list_icon" />
                            <p className="card_p_counselor"> {card.time}</p>
                          </p>
                          <p
                            className="card_link_counselor"
                            style={{ marginLeft: "55px", display: "flex" }}
                          >
                            <img src={list_clock} className="list_icon" />
                            <p> {card.date}</p>
                          </p>
                        </div>
                        <p className="card_links2_counselor">
                          Details{" "}
                          <IoIosArrowForward className="card_icon_link_con" />
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListView;
