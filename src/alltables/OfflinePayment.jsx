import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import MyComponent from "../Pages/payments/PaymentDetail";
import AddOfflinePayment from "../Pages/payments/AddOfflinePayment";

const OfflinePayment = () => {
  const [tabledata, setTabledata] = useState([
    {
      studentname: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      payment: "₹700",
      payment: "₹700",
      service: "Consultation",
    },
    {
      studentname: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      payment: "₹700",
      service: "Consultation",
    },
    {
      studentname: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      payment: "₹700",
      service: "Consultation",
    },
    {
      studentname: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      payment: "₹700",
      service: "Consultation",
    },
    {
      studentname: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      payment: "₹700",
      service: "Consultation",
    },
    {
      studentname: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      payment: "₹700",
      service: "Consultation",
    },
    {
      studentname: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      payment: "₹700",
      service: "Consultation",
    },
  ]);
  const [showOfflinePayment, setShowOfflinePayment] = useState(false);
  const [show, setShow] = useState(false);

  const handleCloseOffcanvas = () => setShow(false);
  const handleShowOffcanvas = () => setShow(true);

  const handleShowOfflinePayment = () => setShowOfflinePayment(true);
  const closeOfflinePayment = () => setShowOfflinePayment(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginBottom: "-16px",
        }}
      >
        {" "}
        <div>
          <h1 className="payment_head">Payment History</h1>
          <p className="payment_para ">See your Payment Details</p>
        </div>
        <div style={{ display: "flex", marginTop: "47px" }}>
          <div className="search-container">
            <input
              type="text"
              className="pymnt_searchbox"
              placeholder="Search..."
            />
            <span className="search-icon">
              <FiSearch />
            </span>
          </div>
          <div style={{ margin: "2px 14px 0 " }}>
            <button
              className="pymnt_filter_btn"
              onClick={handleShowOfflinePayment}
            >
              Add Offline Payment
            </button>
          </div>
        </div>
      </div>
      {/* table */}
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
                  <p style={{ marginBottom: "-12px" }}>Email Id</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Payment</p>
                </th>
                <th className="restable_head res_tab_head_p">
                  <p style={{ marginBottom: "-12px" }}>Service</p>
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
                    <p className="res_table_p2">{item.email}</p>
                  </td>
                  <td className="res_td">
                    <p className="res_table_p2">{item.payment}</p>
                  </td>
                  <td className="res_td res_table_p sm-bright">
                    {item.service}
                  </td>
                  <td
                    className="res_td res_table_p"
                    style={{ borderRight: " 1px solid #ccc" }}
                  >
                    <button
                      className="stu_tble_btn"
                      onClick={handleShowOffcanvas}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <MyComponent show={show} handleClose={handleCloseOffcanvas} />
      <AddOfflinePayment
        show={showOfflinePayment}
        handleClose={closeOfflinePayment}
      />
    </div>
  );
};

export default OfflinePayment;
