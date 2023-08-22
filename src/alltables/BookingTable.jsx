import React, { useState } from "react";

const BookingTable = () => {
  const [tabledata, setTabledata] = useState([
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Career Counseling",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Application in Universities",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Career Counseling",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Application in Universities",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Career Counseling",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Application in Universities",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Career Counseling",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Application in Universities",
      date: "20/8/2023",
    },
    {
      name: "Satvik Kapoor",
      phone: "7503063585",
      purchaseplan: "Career Counseling",
      date: "20/8/2023",
    },
  ]);
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
                <div style={{ display: "flex", marginBottom: "-12px" }}>
                  <input type="checkbox" className="res_check" />
                  <p className="res_tab_head_p">Student Name</p>
                </div>
              </th>
              <th className="restable_head res_tab_head_p">
                <div style={{ marginBottom: "-12px" }}>Phone Number</div>
              </th>
              <th className="restable_head res_tab_head_p">
                <div style={{ marginBottom: "-12px" }}>Purchase Plan</div>
              </th>
              <th className="restable_head res_tab_head_p">
                <div style={{ marginBottom: "-12px" }}>Date</div>
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

                    <p className="res_table_p">{item.name}</p>
                  </div>
                </td>
                <td className="res_td">
                  <p className="res_table_p2">{item.phone}</p>
                </td>
                <td className="res_td">
                  <p className="res_table_p2">{item.purchaseplan}</p>
                </td>
                <td className="res_td res_table_p">{item.date}</td>
                <td
                  className="res_td res_table_p "
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
  );
};

export default BookingTable;
