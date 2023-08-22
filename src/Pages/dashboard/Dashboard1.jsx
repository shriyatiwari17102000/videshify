// import React, { useState } from "react";
// import styles from "./dashboard.css";
// // import Charts from "react-apexcharts";
// import { FiArrowUpRight } from "react-icons/fi";
// import { Row, Col, Container } from "react-bootstrap";
// import Navbar from "../../components/navbar/Navbar";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import card_user from "../../images/card_user.png";
// import rightcardicon from "../../images/rightcardicon.png";
// import VerticalBarChart from "./ReactChart";

// const Dashboard = () => {
//   const [cardData, setCardData] = useState([
//     {
//       cardhead: "Total Bookings",
//       cardTextNo: "54",
//       cardTextPara: "bookings are waiting for you",
//       cardBottomPara: "See All Bookings",
//     },
//     {
//       cardhead: "Total Students",
//       cardTextNo: "300",
//       cardTextPara: "Student you have in total",
//       cardBottomPara: "See All Students",
//     },
//   ]);
//   return (
//     <div className="right-aside">
//       <div>
//         <Navbar />
//       </div>

//       {/*  */}
//       <p className="route_p">
//         <span className="route_p_dash">Dashboard </span>
//         <span>&gt;</span> <span className="route_p_home">Home</span>
//       </p>
//       {/* Card Section */}
//       <div style={{ marginLeft: "20px" }}>
//         <div className="dash_div">
//           {cardData.map((item, index) => (
//             <Card className="mainCards">
//               <Card.Body>
//                 <h6 className="cardHead">{item.cardhead}</h6>
//                 <h4 className="cardH4">
//                   {" "}
//                   <span className="cardTxtNo">{item.cardTextNo}</span>{" "}
//                   <span className="cardTxtPara"> {item.cardTextPara}</span>
//                 </h4>
//                 <span className="cardBtm">{item.cardBottomPara}</span>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>

//         {/* right-section */}
//         <div
//           style={{ marginLeft: "784px", marginTop: "-238px" }}
//           className="right_div"
//         >
//           <Card className="rightsideCard">
//             <Card.Img variant="top" className="right_img" src={card_user} />
//             <Card.Body>
//               <Card.Title className="right_title">Nishant Chaodhary</Card.Title>
//               <Card.Text className="rightside_text">Counselor</Card.Text>
//               <Card.Text className="rightside_text">
//                 6 Year Experience
//               </Card.Text>
//               <Card.Text
//                 className="rightside_text"
//                 style={{ marginLeft: "9px" }}
//               >
//                 5, Mulji House, New Prabhadevi Road, Nr. Paras Cloth Store,
//                 Prabhadevi
//               </Card.Text>
//               <Card.Text className="rightside_p">View all</Card.Text>
//             </Card.Body>
//           </Card>
//           {/*  */}
//           <Card className="btm_rightcard">
//             <Card.Img
//               variant="top"
//               className="btm_cardimg"
//               src={rightcardicon}
//             />
//             <Card.Body>
//               <Card.Text className="btmcard_para">
//                 Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//                 vulputate libero et velit interdum, ac aliquet odio mattis.
//                 Class aptent taciti sociosqu ad litora torquent per conubia
//                 nostra, per himenaeos. <br />
//                 <br />
//                 Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//                 vulputate libero et velit interdum, ac aliquet odio mattis.
//                 Class aptent taciti sociosqu ad litora
//               </Card.Text>

//               <Button className="btmcard_btn">See issues</Button>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="chart_main_div">
//           <VerticalBarChart />
//         </div>
//         <div className="btm_dash_div"></div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
