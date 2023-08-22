import React, { useState } from "react";

import "../customcss/custom.css";
import Navbar from "../../components/navbar/Navbar";

import RoleTable from "../../alltables/RolesTable";
import { FiSearch } from "react-icons/fi";
import AddRoles from "./AddRoles";

const Roles = () => {
const[show, setShow] = useState(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
  return (
    <>
      <div className="right-aside">
       
        <div>
          <p className="route_p" style={{ display: "flex" }}>
            <a
              href="/"
              className="route_p_dash"
              style={{  marginTop: "0" }}
            >
              Dashboard{" "}
            </a>
            <span style={{ margin: "0 8px" }}>&gt;</span>{" "}
            <span className="route_p_home" style={{ marginTop: "5px" }}>
             Support
            </span>
          </p>
        </div>
        <div
        style={{
          display: "flex",
          marginTop: "78px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "10px", marginTop: "-3rem" }}>
          {" "}
          <h1 className="stu_head">Manage Roles</h1>
          <p className="stu_para">Manage your team roles</p>
        </div>
        <div
          className="search-container"
          style={{ display: "flex", marginTop: "-13px" }}
        >
          <input
            type="text"
            className="pymnt_searchbox"
            placeholder="Search by Ticket ID"
          />
          <span className="search-icon">
            <FiSearch />
          </span>
          <div style={{ margin: "0px 42px 57px 13px" }}>
            <button className="pymnt_filter_btn" onClick={handleOpen}>
              Add Roll
            </button>
          </div>
        </div>
      </div>
        <RoleTable/>
        </div>
    <AddRoles show={show} handleClose={handleClose}/> 
    </>
  );
};

export default Roles;
