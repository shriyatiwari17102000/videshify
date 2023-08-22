import React, { useState } from "react";
import prof_img1 from "../../images/prof_img1.png";
import prof_img2 from "../../images/prof_img2.png";
import prof_img3 from "../../images/prof_img3.png";
import prof_img4 from "../../images/prof_img4.png";

const VideoComponent = () => {
  const images = [prof_img1, prof_img2, prof_img3, prof_img4];

  return (
    <div className="d-flex">
      {images.map((item, index) => (
        <img src={item} className="me-4" />
      ))}
    </div>
  );
};

export default VideoComponent;
