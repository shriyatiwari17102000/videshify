import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyInquiryTable = () => {
    const [tabledata, setTabledata] = useState([
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Career Counseling",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Other",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Other",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Application in Universities",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Career Counseling",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Application in Universities",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Career Counseling",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Application in Universities",
          date: "20/8/2023",
        },
        {
          name: "Satvik Kapoor",
          phone: "7503063585",
          category: "Career Counseling",
          date: "20/8/2023",
        },
      ]);
      const navigate = useNavigate();
      const handleNavigate = () => {
        navigate("/addinquiry");
      };
  return (
    <div className="cont_main">
    <div className="container_table">
       <table className="resource_table rt1">
          <thead>
            <tr>
              <th
                className="restable_head"
                style={{ width: "50px !important" }}
              >
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <input type="checkbox" className="res_check" />
                  <p className="res_tab_head_p">Student Name</p>
                </div>
              </th>
              <th className="restable_head res_tab_head_p">
                <div style={{ marginBottom: "7px" }}>Phone Number</div>
              </th>
              <th className="restable_head res_tab_head_p">
                <div style={{ marginBottom: "7px" }}>Category</div>
              </th>
              <th className="restable_head res_tab_head_p">
                <div style={{ marginBottom: "7px" }}>Date</div>
              </th>
              <th className="restable_head res_tab_head_p">
                <div style={{ marginBottom: "7px" }}>Actions</div>
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

                    <p className="res_table_p">{item.name}</p>
                  </div>
                </td>
                <td className="res_td">
                  <p className="res_table_p2">{item.phone}</p>
                </td>
                <td className="res_td">
                  <p className="res_table_p2">{item.category}</p>
                </td>
                <td className="res_td res_table_p">{item.date}</td>
                <td
                  className="res_td res_table_p "
                  style={{ borderRight: " 1px solid #ccc" }}
                >
                  <button className="stu_tble_btn" onClick={handleNavigate}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default MyInquiryTable
