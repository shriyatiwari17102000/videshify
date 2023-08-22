// import React from "react";
// import { useState } from "react";
// import { useRef } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import "./support.css";
// import sendicon_chat from "../../images/sendicon_chat.png";
// import input_add_icon from "../../images/input_add_icon.png";
// import input_smiley_icon from "../../images/input_smiley_icon.png";
// import chat_input_icon from "../../images/chat_input_icon.png";

// // Example messages data with the desired message order
// const initialMessages = [
//   {
//     id: 1,
//     text: "@Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. Scholarships and grants are limited, and the cost of living in another country can be high. It would be great to hear from those who managed to find affordable options.",
//     sender: 1,
//     receiver: 2,
//   },
//   {
//     id: 2,
//     text: "I studied abroad for a semester in Spain during my undergraduate years, and it was an incredible experience. I gained a whole new perspective on the world, learned a new language, and made lifelong friends. I highly recommend it. I also share a file hope this can be helpful.",
//     sender: 2,
//     receiver: 1,
//   },
//   {
//     id: 3,
//     text: " @Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. ",
//     sender: 1,
//     receiver: 2,
//   },
//   {
//     id: 4,
//     text: "I studied abroad for a semester in Spain during my undergraduate years, and it was an incredible experience.",
//     sender: 2,
//     receiver: 1,
//   },
// ];

// const TicketDetails = () => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [newMessage, setNewMessage] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const messageContainerRef = useRef();

//   const toggleEmojiPicker = () => {
//     setShowEmojiPicker((prevState) => !prevState);
//   };

//   const handleInputChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return;

//     const newMessageObj = {
//       id: messages.length + 1,
//       text: newMessage,
//       sender: 1,
//       receiver: selectedUserId,
//     };

//     setMessages((prevMessages) => [newMessageObj, ...prevMessages]);
//     setNewMessage("");
//   };

//   return (<>
//     <Container>
//       <Row>
//         <Col
//           sm={12}
//           className={"d-flex justify-content-between align-items-center mb-3"}
//         >
//           <div className="d-flex">
//             <h3 className="me-2">Ticket Details</h3>
//             <span>#50405</span>
//           </div>
//           <select>
//             <option value="">Marks</option>
//           </select>
//         </Col>
//         <Col sm={12} md={4}>
//           <div className="d-flex justify-content-between align-items-center mb-1">
//             <h5>Name :- </h5>
//             <span>Nishant Choudhary</span>
//           </div>
//           <div className="d-flex justify-content-between align-items-center mb-1">
//             <h5>Date Created :-</h5>
//             <span>20/8/2023</span>
//           </div>
//           <div className="d-flex justify-content-between align-items-center mb-1">
//             <h5>Category</h5>
//             <span>Other</span>
//           </div>
//         </Col>
//         {/* <Col sm={12} className="p-4 mt-3"> */}
//           {/* <div className="ticket-msg-container"> */}
//           {/* </div> */}
//         {/* </Col> */}
//       </Row>
//     </Container>
//             <div className="message-container" ref={messageContainerRef}>
//               {/* Display "Today" after two messages */}

//               {messages.slice(0, 2).map((message) => (
//                 <div
//                   key={message.id}
//                   className={`message ${
//                     message.sender === 1 ? "user" : "other"
//                   }`}
//                 >
//                   <div className="msg_txt_div">
//                     <p
//                       className={`msg_txt ${
//                         message.sender === 1 ? "you-msg" : "other-msg"
//                       }`}
//                     >
//                       {message.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//               {messages.length > 2 && <div className="msg_divider">Today</div>}
//               {messages.slice(2).map((message) => (
//                 <div
//                   key={message.id}
//                   className={`message ${
//                     message.sender === 1 ? "user" : "other"
//                   }`}
//                 >
//                   <div className="msg_txt_div">
//                     <p
//                       className={`msg_txt ${
//                         message.sender === 1 ? "you-msg" : "other-msg"
//                       }`}
//                     >
//                       {message.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* <MessagePage /> */}
//             <div className="inputPanel">
//               <div className="inputWrapper">
//                 <input
//                   type="text"
//                   className="chat_input"
//                   value={newMessage}
//                   onChange={handleInputChange}
//                   placeholder="Message ..."
//                 />
//                 <div className="chat_send">
//                   <img src={input_add_icon} />
//                   <input type="file" style={{ display: "none" }} id="file" />
//                   <label htmlFor="file">
//                     <img src={chat_input_icon} />
//                   </label>
//                   <img src={input_smiley_icon} onClick={toggleEmojiPicker} />
//                 </div>
//               </div>

//               <button
//                 onClick={handleSendMessage}
//                 style={{
//                   border: "none",
//                   marginRight: "20px",
//                   marginTop: "-52px",
//                 }}
//               >
//                 <img className="sendmsg_img" src={sendicon_chat} />
//               </button>
//             </div>
//             </>
//   );
// };

// export default TicketDetails;

import React, { useRef, useState } from "react";
import sendicon_chat from "../../images/sendicon_chat.png";
import { Col, Container, Row } from "react-bootstrap";
import "./support.css";

const TicketDetails = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef();

  // Example messages data with the desired message order
  const initialMessages = [
    {
      id: 1,
      text: "@Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. Scholarships and grants are limited, and the cost of living in another country can be high. It would be great to hear from those who managed to find affordable options.",
      sender: 1,
      receiver: 2,
    },
    {
      id: 2,
      text: "I studied abroad for a semester in Spain during my undergraduate years, and it was an incredible experience. I gained a whole new perspective on the world, learned a new language, and made lifelong friends. I highly recommend it. I also share a file hope this can be helpful.",
      sender: 2,
      receiver: 1,
    },
    {
      id: 3,
      text: " @Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. ",
      sender: 1,
      receiver: 2,
    },
    {
      id: 4,

      text: "I studied abroad for a semester in Spain during my undergraduate years, and it was an incredible experience.",
      sender: 2,
      receiver: 1,
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMessageObj = {
      id: messages.length + 1,
      text: newMessage,
      sender: 1,
      receiver: selectedUserId,
    };

    setMessages((prevMessages) => [newMessageObj, ...prevMessages]);
    setNewMessage("");
  };

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
          <span style={{ marginTop: "0px", color: "black" }}>Support</span>
          <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
          <span style={{ marginTop: "0px", color: "black" }}>
            Ticket Details
          </span>
        </p>
      </div>

      <Container className="w-100 bg-white ticket-container px-5 py-5">
        <Row>
          <Col
            sm={12}
            className={"d-flex justify-content-between align-items-center mb-2 "}
          >
            <div className="d-flex">
              <h3 className="ticket-h5 ticket-header me-2">Ticket Details</h3>
              <p className="ticket-header ticket-h5 text-body-tertiary ">
                #50405
              </p>
            </div>
            <select className="border rounded border-light-subtle py-2 pe-5 ps-2">
              <option value="" className="text-align-left">
                Marks
              </option>
            </select>
          </Col>
          <Col sm={12} md={4} className="my-4">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h5 className="ticket-h5">Name :- </h5>
              <p className="ticket-h5 text-body-tertiary  ticket-p ">Nishant Choudhary</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h5 className="ticket-h5">Date Created :-</h5>
              <p className="ticket-h5 text-body-tertiary  ticket-p ">20/8/2023</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h5 className="ticket-h5">Category</h5>
              <p className="ticket-h5 text-body-tertiary  ticket-p ">Other</p>
            </div>
          </Col>

          <div className="chat m-0">
            {/*  */}
            <div className="message-container" ref={messageContainerRef}>
              {/* Display "Today" after two messages */}

              {messages.slice(0, 2).map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.sender === 1 ? "user" : "other"
                  }`}
                >
                  <div className="msg_txt_div">
                    <p
                      className={`msg_txt ${
                        message.sender === 1 ? "you-msg" : "other-msg"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
              {messages.length > 2 && <div className="msg_divider">Today</div>}
              {messages.slice(2).map((message) => (
                <div
                  key={message.id}
                  className={`message ${
                    message.sender === 1 ? "user" : "other"
                  }`}
                >
                  <div className="msg_txt_div">
                    <p
                      className={`msg_txt ${
                        message.sender === 1 ? "you-msg" : "other-msg"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <MessagePage /> */}
            <div className="inputPanel">
              <div className="inputWrapper">
                <input
                  type="text"
                  className="chat_input"
                  style={{ width: "881px", background:"none" }}
                  value={newMessage}
                  onChange={handleInputChange}
                  placeholder="Message ..."
                />
              </div>

              <button
                onClick={handleSendMessage}
                style={{
                  border: "none",
                  marginRight: "47px",
                  marginTop: "-52px",
                }}
              >
                <img className="sendmsg_img" src={sendicon_chat} />
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TicketDetails;
