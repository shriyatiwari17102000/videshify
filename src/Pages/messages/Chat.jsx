import React, { useRef, useState } from "react";
import "./message.css";
import msg_searchicon from "../../images/msg_searchicon.png";
import msg_useraddicon from "../../images/msg_useraddicon.png";
import msg_helpicon from "../../images/msg_helpicon.png";
import user_img from "../../images/user_img.png";
import input_add_icon from "../../images/input_add_icon.png";
import input_smiley_icon from "../../images/input_smiley_icon.png";
import chat_input_icon from "../../images/chat_input_icon.png";
import sendicon_chat from "../../images/sendicon_chat.png";
import MessageSidebar from "./MessageSidebar";
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
      text: "@Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. Scholarships and grants are limited, and the cost of living in another country can be high. It would be great to hear from those who managed to find affordable options.",
      sender: 1,
      receiver: 2,
    },
    {
      id: 2,
      img: user_img,
      name: "Satvik",
      text: "I studied abroad for a semester in Spain during my undergraduate years, and it was an incredible experience. I gained a whole new perspective on the world, learned a new language, and made lifelong friends. I highly recommend it. I also share a file hope this can be helpful.",
      sender: 2,
      receiver: 1,
    },
    {
      id: 3,
      name: "you",
      text: " @Jishaan Malhotra I have mixed feelings about studying abroad. While it can be an amazing experience, the financial aspect can be challenging for many. ",
      sender: 1,
      receiver: 2,
    },
    {
      id: 4,
      img: user_img,
      name: "Satvik",
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
      <div className="home_container" style={{ display: "flex" }}>
        <MessageSidebar />
        <div className="chat">
          <div className="chatInfo">
            <div>
              <img
                src={user_img}
                className="userChatImg"
                style={{ margin: "15px 19px 12px 23px" }}
              />
              <div style={{ marginTop: "-52px", marginLeft: "87px" }}>
                <span className="span_chat">Nishant Choudhary</span>
                <p className="para_chat">Nishant@gmail.com</p>
              </div>
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
                    <div className="other-user-info">
                      <img
                        src={message.img}
                        className="userChatImg userChatImg2"
                      />{" "}
                    </div>
                    <p className="user_name_txt">Satvik</p>
                  </>
                )}
                {message.sender === 1 && (
                  <p
                    className="user_name_txt"
                    style={{ color: "black", marginBottom: "9px" }}
                  >
                    You
                  </p>
                )}
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
                className={`message ${message.sender === 1 ? "user" : "other"}`}
              >
                {message.sender === 2 && (
                  <>
                    <div className="other-user-info">
                      <img
                        src={message.img}
                        className="userChatImg userChatImg2"
                      />
                    </div>
                    <p className="user_name_txt">Satvik</p>
                  </>
                )}
                {message.sender === 1 && (
                  <p
                    className="user_name_txt"
                    style={{ color: "black", marginBottom: "9px" }}
                  >
                    You
                  </p>
                )}
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
