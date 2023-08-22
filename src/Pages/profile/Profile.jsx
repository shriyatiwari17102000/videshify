import React from "react";
import classes from "./profile.module.css";
import LabelledInput from "../../components/LabelledInput/LabelledInput";
import TextArea from "../../components/textarea/TextArea";
import profilevideo from "../../images/profilevideo.png";
import videoicon from "../../images/videoicon.png";
import stuinfo_img1 from "../../images/stuinfo_img1.png";
import stuinfo_img2 from "../../images/stuinfo_img2.png";
import stuinfo_img3 from "../../images/stuinfo_img3.png";
import Gradient from "../../images/Gradient.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import VideoComponent from "../../components/videos/VideoComponent";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const data = [
  {
    label: "Individual or agency",
    id: "fn",
    value: "Agency",
  },
  {
    label: "Name of agency",
    id: "ln",
    value: "Nishnat consultancy",
  },
  {
    label: "Email ID",
    id: "em",
    value: "nishant@gmail.com",
  },
  {
    label: "Phone number",
    id: "mob",
    value: "9311676139",
  },
  {
    label: "Education level degree(university name)",
    id: "em2",
    value: "B.tech (IP university)",
  },
  {
    label: "Number of previous students admitted",
    id: "mob2",
    value: "60",
  },
  {
    label: "Number of years as a counselor",
    id: "gr",
    value: "A",
  },
  {
    label: "City",
    id: "cn",
    value: "New Delhi, India",
  },
];
const textareaData = [
  {
    label: "About",
    value:
      "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

const labeldata = [
  {
    id: "fn",
    value: "Text Preparation(ACT, SAT,etc}",
  },
  {
    label: "",
    id: "ln",
    value: "General Counselling",
  },
  {
    label: "",
    id: "em",
    value: "Essay Writing",
  },
  {
    id: "mob",
    value: "Visa/After admission help",
  },
];
const bankdetailsData = [
  {
    id: "fn",
    label: "Bank Name",
    value: "Bank of baroda",
  },
  {
    label: "IFSC Code",
    id: "ln",
    value: "0000BB77",
  },
  {
    label: "Account Number",
    id: "em",
    value: "656465474454",
  },
];

const cardData = [
  {
    img: stuinfo_img1,
    h1: "Nishant Choudhary",
    h4: "Counselor",
    p: "12 year experience",
  },
  {
    img: stuinfo_img2,
    h1: "Nishant Choudhary",
    h4: "Counselor",
    p: "12 year experience",
  },
  {
    img: stuinfo_img3,
    h1: "Nishant Choudhary",
    h4: "Counselor",
    p: "12 year experience",
  },
  {
    img: stuinfo_img1,
    h1: "Nishant Choudhary",
    h4: "Counselor",
    p: "12 year experience",
  },
];

const Profile = () => {
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate('/editprofile')
  }

  return (
    <div className="right-aside">
      <div>
        <p className="route_p" style={{ display: "flex" }}>
          <a href="/" className="route_p_dash" style={{ marginTop: "0" }}>
            Dashboard{" "}
          </a>
          <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
          <span className="route_p_home" style={{ marginTop: "5px" }}>
            Profile
          </span>
        </p>
      </div>
      {/* title section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginBottom: "-16px",
        }}
      >
        {" "}
        <div>
          <h1 className="payment_head">My Profile</h1>
          <p className="payment_para ">
            See here your all Details and edit them
          </p>
        </div>
        <div className="mt-5 mx-3">
          <button className="pymnt_filter_btn" onClick={handleNavigate}>Edit Profile</button>
        </div>
      </div>
      <div className={classes.img_container}>
        <h1 className={classes.top_left}>ID</h1>
        <div className={classes.heading_left}>
          <p className="mb-0 text-start">IDM International</p>
          <p>Organizational Counselor</p>
        </div>
        <img src={Gradient} />
      </div>
      {/* main section */}
      <div className={classes.profile_container}>
        <div className={`${classes.flex}`}>
          {data.map((element, index) => (
            <LabelledInput
              cls={classes.input_div}
              key={index}
              id={element.id}
              ro={true}
              label={element.label}
              value={element.value}
            />
          ))}

          {textareaData.map((element, index) => (
            <TextArea
              cls={classes.input_div}
              key={index}
              id={element.id}
              ro={true}
              label={element.label}
              value={element.value}
            />
          ))}
          <h3 className={classes.heading}>Services Provided</h3>
          {labeldata.map((element, index) => (
            <LabelledInput
              cls={classes.input_div}
              key={index}
              id={element.id}
              ro={true}
              label={element.label}
              value={element.value}
            />
          ))}
        </div>

        <div>
          <h3 className={`${classes.heading} mb-3 mt-5`}>Intro Video</h3>
          <img src={profilevideo} />
          <img src={videoicon} className={classes.video_img} />
        </div>

        {/* card-section */}

        <h3 className={`${classes.heading} mb-3`}>My Team Details</h3>
        <div className={classes.card_div}>
          {" "}
          {cardData.map((element) => (
            <CardComponent
              img={element.img}
              h1={element.h1}
              h4={element.h4}
              p={element.p}
            />
          ))}
        </div>

        {/* Testimonials */}
        <h3 className={`${classes.heading} my-4`}>Testimonials</h3>
        <VideoComponent />
        <hr className="mt-5" />

        {/* bottom-section */}
        <div div className={`${classes.flex}`}>
          <h3 className={`${classes.heading} mt-0 mb-4`}>
            Bank Account Details
          </h3>
          {bankdetailsData.map((element, index) => (
            <LabelledInput
              cls={classes.input_div}
              key={index}
              id={element.id}
              ro={true}
              label={element.label}
              value={element.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
