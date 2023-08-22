import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SupportTable = () => {
  const [tabledata, setTabledata] = useState([
    {
      ticketId: "#80394",
      category: "Other",
      status: "Resolve",
      date: "20/8/2023",
      message: "I want to resolve....",
    },
    {
      ticketId: "#80394",
      category: "Other",
      status: "Resolve",
      date: "20/8/2023",
      message: "I want to resolve....",
    },
    {
      ticketId: "#80394",
      category: "Other",
      status: "Resolve",
      date: "20/8/2023",
      message: "I want to resolve....",
    },
    {
      ticketId: "#80394",
      category: "Other",
      status: "Resolve",
      date: "20/8/2023",
      message: "I want to resolve....",
    },
    {
      ticketId: "#80394",
      category: "Other",
      status: "Resolve",
      date: "20/8/2023",
      message: "I want to resolve....",
    },
    {
      ticketId: "#80394",
      category: "Other",
      status: "Resolve",
      date: "20/8/2023",
      message: "I want to resolve....",
    },
    {
      ticketId: "#80394",
      category: "Other",
      status: "Resolve",
      date: "20/8/2023",
      message: "I want to resolve....",
    },
  ]);

  const navigate = useNavigate()
  const handleNavigate = ()=>{
navigate("/ticketdetails")
  }

  return (
    <div>
      <div className="cont_main">
        <div className="container_table">
          <table className="resource_table rt1">
            <thead>
              <tr>
                <th
                  className="restable_head"
                  style={{ width: "50px !important" }}
                >
                  <div style={{ display: "flex", marginBottom: "-12px" }}>
                    <input type="checkbox" className="res_check" />
                    <p className="res_tab_head_p">Ticket Id</p>
                  </div>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Category</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Status</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Date</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <div style={{ marginBottom: "-12px" }}>Message</div>
                </th>
                <th className="restable_head res_tab_head_p">
                  <div style={{ marginBottom: "-12px" }}>Actions</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {tabledata.map((item, index) => (
                <tr key={item.id} style={{ backgroundColor: "white" }}>
                  <td
                    className="res_td"
                    style={{ borderLeft: " 1px solid #ccc" }}
                  >
                    <div className="d-flex ">
                      <input type="checkbox" className="res_check" />

                      <p className="res_table_p">{item.ticketId}</p>
                    </div>
                  </td>
                  <td className="res_td">
                    <p className="res_table_p2">{item.category}</p>
                  </td>
                  <td className="res_td">
                    <p className="res_table_p2">{item.status}</p>
                  </td>
                  <td className="res_td res_table_p">{item.date}</td>
                  <td className="res_td res_table_p sm-bright">
                    {item.message}
                  </td>
                  <td
                    className="res_td res_table_p"
                    style={{ borderRight: " 1px solid #ccc" }}
                  >
                    <button className="stu_tble_btn" onClick={handleNavigate}>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportTable;
