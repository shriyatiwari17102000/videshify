import React, { useState } from "react";

const MyplansTable = () => {
  const [tabledata, setTabledata] = useState([
    {
      studentname: "Satvik Kapoor",
      phone: "7036666123",
      plan: "Career Counselling",
      date: "20/8/2023",
    },
    {
      studentname: "Satvik Kapoor",
      phone: "7036666123",
      plan: "Career Counselling",
      date: "20/8/2023",
    },
    {
      studentname: "Satvik Kapoor",
      phone: "7036666123",
      plan: "Career Counselling",
      date: "20/8/2023",
    },
    {
      studentname: "Satvik Kapoor",
      phone: "7036666123",
      plan: "Career Counselling",
      date: "20/8/2023",
    },
    {
      studentname: "Satvik Kapoor",
      phone: "7036666123",
      plan: "Career Counselling",
      date: "20/8/2023",
    },
    {
      studentname: "Satvik Kapoor",
      phone: "7036666123",
      plan: "Career Counselling",
      date: "20/8/2023",
    },
    {
      studentname: "Satvik Kapoor",
      phone: "7036666123",
      plan: "Career Counselling",
      date: "20/8/2023",
    },
  ]);
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
                    <p className="res_tab_head_p">Student Name</p>
                  </div>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Phone Number</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Purchase Plan</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Date</p>
                </th>
                <th className="restable_head">
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

                      <p className="res_table_p">{item.studentname}</p>
                    </div>
                  </td>
                  <td className="res_td">
                    <p className="res_table_p2">{item.phone}</p>
                  </td>
                  <td className="res_td">
                    <p className="res_table_p2">{item.plan}</p>
                  </td>
                  <td className="res_td res_table_p sm-bright">{item.date}</td>
                  <td
                    className="res_td res_table_p"
                    style={{ borderRight: " 1px solid #ccc" }}
                  >
                    <button className="stu_tble_btn">View Details</button>
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

export default MyplansTable;
