import React, { useState } from "react";
import user_img from "../../images/user_img.png";
import { FiSearch } from "react-icons/fi";
import "./message.css";

const MessageSidebar = () => {
  const [message, setMessage] = useState([
    {
      img: user_img,
      name: "Nishant Choudhari",
      time: "5 min",
      msg: "3 Messages",
    },
    { img: user_img, name: "Ishant Sharma", time: "5 min", msg: "3 Messages" },
    { img: user_img, name: "Naveen Tiwari", time: "5 min", msg: "3 Messages" },
    { img: user_img, name: "Satvik Kapoor", time: "5 min", msg: "3 Messages" },
    { img: user_img, name: "Diya Gupta", time: "5 min", msg: "3 Messages" },
    { img: user_img, name: "Anjana Singh", time: "5 min", msg: "3 Messages" },
  ]);
  return (
    <div className="msg_sidebar">
      {/* Search section */}
      <div className="searchmsg">
        <div className="searchForm">
          <input
            className="searchinput pymnt_searchbox "
            placeholder="Search People"
            type="text"
          />
          <span>
            <FiSearch className="srch_chat_icon" />
          </span>
        </div>
        <h6 className="active_user_msg">Active</h6>
        <div className="userChat">
          <img src={user_img} className="userChatImg" />
          <img src={user_img} className="userChatImg" />
          <img src={user_img} className="userChatImg" />
          <img src={user_img} className="userChatImg" />
          <img src={user_img} className="userChatImg" />
        </div>
        <hr className="msg_hr" />
      </div>
      {/* userprofile --------Chats */}
      <div className="chatss">
        {message.map((item) => {
          return (
            <div className="userChat1">
              <img src={item.img} className="userChatImg" />
              <div className="userChatInfo">
                <div className="name-time-wrapper">
                  <span className="chats_msg_span name">{item.name}</span>
                  <span
                    className="chats_msg_span chat_time time"
                    style={{ marginLeft: "42px" }}
                  >
                    {item.time}
                  </span>
                </div>

                <p className="chats_msg_p">{item.msg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageSidebar;
