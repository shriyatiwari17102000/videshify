import React from "react";
import user_img from "../../images/user_img.png";
import "./student.css";
import { AiOutlinePlus } from "react-icons/ai";

const StuAvatars = () => {
  const avatars = [
    { src: user_img, alt: "Travis Howard" },

    { src: user_img, alt: "Trevor Henderson" },
  ];
  return (
    <div className="avatar-group">
      {avatars.map((avatar, index) => (
        <div key={index} className="avatar">
          <div>
            <img src={avatar.src} />
          </div>
        </div>
      ))}
      <div className="avatar add-icon">
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default StuAvatars;
