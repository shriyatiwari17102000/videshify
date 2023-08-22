// import React, { useState } from "react";
// import BookingDashboard from "./BookingDashboard";

// import { Card, Button, NavItem } from "react-bootstrap";
// import BookingNav from "./BookingNav";

// const Booking = () => {
//   const [cardData, setCardData] = useState([
//     {
//       heading: "Nishant Choudhary",
//       title: "Counselling",
//       date: "20/08/2023",
//       time: " 8:00 Pm",
//     },
//     {
//       heading: "Nishant Choudhary",
//       title: "Counselling",
//       date: "20/08/2023",
//       time: " 8:00 Pm",
//     },
//     {
//       heading: "Nishant Choudhary",
//       title: "Counselling",
//       date: "20/08/2023",
//       time: " 8:00 Pm",
//     },
//     {
//       heading: "Nishant Choudhary",
//       title: "Counselling",
//       date: "20/08/2023",
//       time: " 8:00 Pm",
//     },
//     {
//       heading: "Nishant Choudhary",
//       title: "Counselling",
//       date: "20/08/2023",
//       time: " 8:00 Pm",
//     },
//     {
//       heading: "Nishant Choudhary",
//       title: "Counselling",
//       date: "20/08/2023",
//       time: " 8:00 Pm",
//     },
//   ]);
//   return (
//     <div className="right-aside" style={{ padding: "0" }}>
//       <BookingDashboard />
//       {/* card section */}
//       <div className="book_div">
//         {cardData.map((item) => {
//           return (
//             <Card className="booking_card_div">
//               <Card.Body>
//                 <Card.Title className="book_card_mainheading">
//                   {item.heading}
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted book_card_subtitle">
//                   Service
//                 </Card.Subtitle>
//                 <h5 className="book_card_title">{item.title}</h5>

//                 <div className="date_div">
//                   <div>
//                     <h6 className="book_card_head"> Date </h6>
//                     <p className="book_card_para"> {item.date}</p>
//                   </div>
//                   <div style={{ marginRight: "27px" }}>
//                     <h6 className="book_card_head"> Time </h6>
//                     <p className="book_card_para"> {item.time}</p>
//                   </div>
//                 </div>
//               </Card.Body>
//               <Card.Footer className="footer_div">
//                 <Button className="booking_card_btn">Card Link</Button>
//                 <Button className="booking_card_btn accept_booking">
//                   Another Link
//                 </Button>
//               </Card.Footer>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Booking;
import React, { useState } from "react";
import BookingDashboard from "./BookingDashboard";

import { Card, Button, NavItem } from "react-bootstrap";
import BookingNav from "./BookingNav";

const Booking = () => {
  const [cardData, setCardData] = useState([
    {
      heading: "Nishant Choudhary",
      title: "Counselling",
      date: "20/08/2023",
      time: " 8:00 Pm",
    },
    {
      heading: "Nishant Choudhary",
      title: "Counselling",
      date: "20/08/2023",
      time: " 8:00 Pm",
    },
    {
      heading: "Nishant Choudhary",
      title: "Counselling",
      date: "20/08/2023",
      time: " 8:00 Pm",
    },
    {
      heading: "Nishant Choudhary",
      title: "Counselling",
      date: "20/08/2023",
      time: " 8:00 Pm",
    },
    {
      heading: "Nishant Choudhary",
      title: "Counselling",
      date: "20/08/2023",
      time: " 8:00 Pm",
    },
    {
      heading: "Nishant Choudhary",
      title: "Counselling",
      date: "20/08/2023",
      time: " 8:00 Pm",
    },
  ]);
  return (
    <div className="right-aside" style={{ padding: "0" }}>
      <BookingDashboard />
      {/* card section */}
      <div className="book_div">
        {cardData.map((item) => {
          return (
            <Card className="booking_card_div">
              <Card.Body>
                <Card.Title className="book_card_mainheading">
                  {item.heading}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted book_card_subtitle">
                  Service
                </Card.Subtitle>
                <h5 className="book_card_title">{item.title}</h5>

                <div className="date_div">
                  <div>
                    <h6 className="book_card_head"> Date </h6>
                    <p className="book_card_para"> {item.date}</p>
                  </div>
                  <div style={{ marginRight: "27px" }}>
                    <h6 className="book_card_head"> Time </h6>
                    <p className="book_card_para"> {item.time}</p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="footer_div">
                <Button className="booking_card_btn">Card Link</Button>
                <Button className="booking_card_btn accept_booking">
                  Another Link
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
