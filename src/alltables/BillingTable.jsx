import React, { useState } from "react";

const BillingTable = () => {
  const [tabledata, setTabledata] = useState([
    {
      transactionid: "#849383",
      planname: "Basic Pro",
      amount: "$200",
      date: "20/8/2023",
    },
    {
      transactionid: "#849383",
      planname: "Basic Pro",
      amount: "$200",
      date: "20/8/2023",
    },
    {
      transactionid: "#849383",
      planname: "Team Pro",
      amount: "$200",
      date: "20/8/2023",
    },
    {
      transactionid: "#849383",
      planname: "Team Pro",
      amount: "$200",
      date: "20/8/2023",
    },
    {
      transactionid: "#849383",
      planname: "Corporate Pro",
      amount: "$200",
      date: "20/8/2023",
    },
    {
      transactionid: "#849383",
      planname: "Teams Pro",
      amount: "$200",
      date: "20/8/2023",
    },
    {
      transactionid: "#849383",
      planname: "Corporate Pro",
      amount: "$200",
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
                    <p className="res_tab_head_p">Transaction ID</p>
                  </div>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Plan name</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Amount</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Date</p>
                </th>
                <th className="restable_head sm-d-none">
                  <div style={{ marginBottom: "-12px" }}></div>
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

                      <p className="res_table_p">{item.transactionid}</p>
                    </div>
                  </td>
                  <td className="res_td">
                    <p className="res_table_p2">{item.planname}</p>
                  </td>
                  <td className="res_td">
                    <p className="res_table_p2">{item.amount}</p>
                  </td>
                  <td className="res_td res_table_p sm-bright">{item.date}</td>
                  <td
                    className="res_td res_table_p side-column"
                    style={{ borderRight: " 1px solid #ccc" }}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingTable;
