import React from "react";
import "./navbar.css";

const Breadcrumbnav = () => {
  return (
    <div>
      <div className="status">
        <p>Dashboard &nbsp; &gt;</p> &nbsp;
        <p>
          Student Information &nbsp; <span className="text-grey">&gt;</span>{" "}
          &nbsp;
        </p>
        <span>Student Profile</span>
      </div>
    </div>
  );
};

export default Breadcrumbnav;
