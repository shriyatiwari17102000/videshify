import React, { useRef, useState } from "react";
import "./community.css";
import msg_searchicon from "../../images/msg_searchicon.png";
import msg_useraddicon from "../../images/msg_useraddicon.png";
import msg_helpicon from "../../images/msg_helpicon.png";
import user_img from "../../images/user_img.png";
import input_add_icon from "../../images/input_add_icon.png";
import input_smiley_icon from "../../images/input_smiley_icon.png";
import chat_input_icon from "../../images/chat_input_icon.png";
import sendicon_chat from "../../images/sendicon_chat.png";
import CommunitySidebar from "./CommunitySidebar";
import Navbar from "../../components/navbar/Navbar";

const Chat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const messageContainerRef = useRef();

  // Example messages data with the desired message order
  const initialMessages = [
    {
      id: 1,
      name: "you",
      time: "6:08 AM",
      img: user_img,
      text: "@Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. Scholarships and grants are limited, and the cost of living in another country can be high. It would be great to hear from those who managed to find affordable options.",
      sender: 1,
      receiver: 2,
    },
    {
      id: 2,
      img: user_img,
      name: "Satvik",
      time: "6:08 AM",
      text: "I studied abroad for a semester in Spain during my undergraduate years, and it was an incredible experience. I gained a whole new perspective on the world, learned a new language, and made lifelong friends. I highly recommend it. I also share a file hope this can be helpful.",
      sender: 2,
      receiver: 1,
    },
    {
      id: 3,
      img: user_img,
      name: "you",
      time: "6:08 AM",
      text: " @Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. ",
      sender: 1,
      receiver: 2,
    },
    {
      id: 4,
      img: user_img,
      name: "Satvik",
      time: "6:08 AM",
      text: "I studied abroad for a semester in Spain during my undergraduate years, and it was an incredible experience.",
      sender: 2,
      receiver: 1,
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMessageObj = {
      id: messages.length + 1,
      text: newMessage,
      img: user_img,
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
          <span style={{ marginTop: "0px", color: "black" }}>Message</span>
        </p>
      </div>
      <div className="community_container" style={{ display: "flex" }}>
        <CommunitySidebar />
        <div className="chat" style={{ height: "900px" }}>
          <div className="chatInfo">
            <div style={{ display: "flex", margin: "28px" }}>
              <span className="span_chat"> # &nbsp; &nbsp; Academics</span>
              <button className="community_grp_btn">Group</button>
            </div>

            <div className="chatIcons">
              <img src={msg_searchicon} style={{ margin: "29px" }} />
              <img src={msg_useraddicon} style={{ marginRight: "27px" }} />
              <img src={msg_helpicon} style={{ marginRight: "45px" }} />
            </div>
          </div>
          {/*  */}
          <div className="message-container" ref={messageContainerRef}>
            {/* Display "Today" after two messages */}

            {messages.slice(0, 2).map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 1 ? "user" : "other"}`}
              >
                {message.sender === 2 && (
                  <>
                    <div className="other-user_info_com">
                      <img
                        src={message.img}
                        className="userChatImg userChatImg2"
                      />{" "}
                      <p className="user_name_txt user_name_com">Satvik</p>
                      <p className="time_com" style={{ marginLeft: "-18px" }}>
                        {message.time}
                      </p>
                    </div>
                  </>
                )}
                {message.sender === 1 && (
                  <div className="user_name_txt user_msg_com">
                    <span className="time_com">{message.time}</span>
                    <p
                      className="user_name_txt"
                      style={{ marginTop: "4.5px", marginRight: "36px" }}
                    >
                      {message.name}
                    </p>

                    <img
                      src={message.img}
                      className="userChatImg userChatImg2"
                    />
                  </div>
                )}
                <div className="msg_txt_com">
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
                className={`message ${message.sender === 1 ? "user" : "other"}`}
              >
                {message.sender === 2 && (
                  <>
                    <div className="other-user_info_com">
                      <img
                        src={message.img}
                        className="userChatImg userChatImg2"
                      />

                      <p className="user_name_txt user_name_com">Satvik</p>
                      <p className="time_com" style={{ marginLeft: "-18px" }}>
                        {message.time}
                      </p>
                    </div>
                  </>
                )}
                {message.sender === 1 && (
                  <div className="user_name_txt user_msg_com">
                    <span className="time_com">{message.time}</span>
                    <p
                      className="user_name_txt"
                      style={{ marginTop: "4.5px", marginRight: "36px" }}
                    >
                      {message.name}
                    </p>

                    <img
                      src={message.img}
                      className="userChatImg userChatImg2"
                    />
                  </div>
                )}
                <div className="msg_txt_com">
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
                value={newMessage}
                onChange={handleInputChange}
                placeholder="Message ..."
              />
              <div className="chat_send">
                <img src={input_add_icon} />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                  <img src={chat_input_icon} />
                </label>
                <img src={input_smiley_icon} onClick={toggleEmojiPicker} />
              </div>
            </div>

            <button
              onClick={handleSendMessage}
              style={{
                border: "none",
                marginRight: "20px",
                marginTop: "-52px",
              }}
            >
              <img className="sendmsg_img" src={sendicon_chat} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
