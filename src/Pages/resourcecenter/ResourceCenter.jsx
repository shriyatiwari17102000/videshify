import React from "react";
import { Table, ProgressBar, Button, ButtonGroup } from "react-bootstrap";
import upload_resource from "../../images/upload_resource.png";
import res_file from "../../images/res_file.png";
import res_user from "../../images/res_user.png";
import "./resource.css";
import "../customcss/custom.css";
import Navbar from "../../components/navbar/Navbar";
import { BiFilter } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const ResourceCenter = () => {
  const data = [
    {
      id: 1,
      images: res_file,
      filename: "Notes of meeting.pdf",
      quality: "16mb",
      dateuploaded: "21/09/2023",
      lastupdated: "23/09/2023",
      uploadedbyimg: res_user,
      uploadedby: "Nishant",
    },
    {
      id: 2,
      images: res_file,
      filename: "Notes of meeting.pdf",
      quality: "16mb",
      dateuploaded: "21/09/2023",
      lastupdated: "23/09/2023",
      uploadedbyimg: res_user,
      uploadedby: "Nishant",
    },
    {
      id: 3,
      images: res_file,
      filename: "Notes of meeting.pdf",
      quality: "16mb",
      dateuploaded: "21/09/2023",
      lastupdated: "23/09/2023",
      uploadedbyimg: res_user,
      uploadedby: "Nishant",
    },
    {
      id: 4,
      images: res_file,
      filename: "Notes of meeting.pdf",
      quality: "16mb",
      dateuploaded: "21/09/2023",
      lastupdated: "23/09/2023",
      uploadedbyimg: res_user,
      uploadedby: "Nishant",
    },
    {
      id: 5,
      images: res_file,
      filename: "Notes of meeting.pdf",
      quality: "16mb",
      dateuploaded: "21/09/2023",
      lastupdated: "23/09/2023",
      uploadedbyimg: res_user,
      uploadedby: "Nishant",
    },
  ];
  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };
  const now = 60;
  const label = `${now}%`;

  return (
    <>
      <div className="right-aside">
        {/* <div>
          <Navbar />
        </div> */}
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
              Resource Center
            </span>
          </p>
        </div>
        <div style={{ marginLeft: "30px" }}>
          {" "}
          <h1 className="res_head">Resource Center</h1>
          <p className="res_para">You Can Upload and Share your resources</p>
        </div>
        <div style={{ marginLeft: "23px" }}>
          <div className="upload-box" onClick={handleUploadClick}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <img src={upload_resource} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <a className="res_a">Click to Upload</a>
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <div>
                <p
                  className="res_p"
                  style={{ marginLeft: "6px", marginTop: "4px" }}
                >
                  or drag and drop file here{" "}
                </p>
                <p className="res_p res_p2">Max file size 50 MB</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="custom-progress-container">
            <div className="icon_div_res">
              <img src={res_file} className="custom-icon" />
            </div>
            <div className="custom-title">
              <span>Notes of meeting.pdf</span>
              <br />
              <span>16mb</span>
            </div>
            <div className="progress-wrapper">
              <ProgressBar now={now} className="custom-progress-bar" />
              <div className="progress-label">{label}</div>
            </div>
          </div>
          <div className="custom-progress-container">
            <div className="icon_div_res">
              <img src={res_file} className="custom-icon" />
            </div>
            <div className="custom-title">
              <span>Notes of meeting.pdf</span>
              <br />
              <span>16mb</span>
            </div>
            <div className="progress-wrapper">
              <ProgressBar now={now} className="custom-progress-bar" />
              <div className="progress-label">{label}</div>
            </div>
          </div>

          {/*  */}

          <div
            style={{
              display: "flex",
              marginTop: "78px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginLeft: "10px", marginTop: "-3rem" }}>
              {" "}
              <h1 className="res_head">Attached Files</h1>
              <p className="res_para">
                You see your Upload and Share your resources{" "}
              </p>
            </div>
            <div
              className="search-container"
              style={{ display: "flex", marginTop: "-13px" }}
            >
              <input
                type="text"
                className="pymnt_searchbox"
                placeholder="Search Payments By Transaction No."
              />
              <span className="search-icon">
                <FiSearch />
              </span>
              <div style={{ margin: "0px 42px 10px 13px" }}>
                <button className="pymnt_filter_btn">
                  Filter
                  <BiFilter
                    style={{
                      width: "17px",
                      height: "20px",
                      marginLeft: "11px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <ButtonGroup
            style={{ marginBottom: "36px" }}
            aria-label="Basic example"
          >
            <button className="button_group_res">All Files</button>
            <button className="button_group_res btn_grp">Your Files</button>
          </ButtonGroup>

          {/* List section */}
          <table className="resource_table">
            <thead>
              <tr>
                <th
                  className="restable_head"
                  style={{ width: "50px !important" }}
                >
                  <div style={{ display: "flex", marginBottom: "-19px" }}>
                    <input type="checkbox" className="res_check" />
                    <p className="res_tab_head_p">File Name</p>
                  </div>
                </th>
                <th className="restable_head res_tab_head_p">
                  <div style={{ marginBottom: "-15px" }}>Date Uploaded</div>
                </th>
                <th className="restable_head res_tab_head_p">
                  <div style={{ marginBottom: "-15px" }}>Last Updated</div>
                </th>
                <th className="restable_head res_tab_head_p">
                  <div style={{ marginBottom: "-15px" }}>Uploaded by</div>
                </th>
                <th className="restable_head res_tab_head_p"></th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id} style={{ backgroundColor: "white" }}>
                  <td
                    className="res_td"
                    style={{ borderLeft: " 1px solid #ccc" }}
                  >
                    <div className="d-flex ">
                      <input type="checkbox" className="res_check" />
                      <div className="icon_div_res icon_div_res2 ">
                        <img src={item.images} className="custom-icon" />
                      </div>
                      <div style={{ marginTop: "9px" }}>
                        <p className="res_table_p">{item.filename}</p>
                        <p className="res_table_p3 " >{item.quality}</p>
                      </div>
                    </div>
                  </td>
                  <td className="res_td res_table_p">{item.dateuploaded}</td>
                  <td className="res_td res_table_p">{item.lastupdated}</td>
                  <td className="res_td">
                    {/* <div className="d-flex gap-2"> */}
                    <img
                      src={item.uploadedbyimg}
                      style={{ width: "28px", height: "28px" }}
                    />
                    <span
                      className="res_table_p"
                      style={{ marginLeft: "10px" }}
                    >
                      {item.uploadedby}
                    </span>
                    {/* </div> */}
                  </td>
                  <td
                    className="res_td res_table_p"
                    style={{ borderRight: " 1px solid #ccc" }}
                  >
                    <div style={{ display: "flex" }}>
                      <button className="res_tble_btn">Edit</button>
                      <button className="res_tble_btn res_tble_btn2">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ResourceCenter;
