import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentTable = () => {
      // navigate to student information
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
    {
      name: "Satvik Kapoor",
      email: "Nishant1@gmail.com",
      batch: "2018",
    },
  ]);

  const handleClick = () => {
    navigate("/studentinfo/academics");
  };

  const handleToggle = (index) => {
    const updatedData = [...data];
    updatedData[index].active = !updatedData[index].active;
    setData(updatedData); // Assuming you have a state variable called 'data' and a setter function 'setData'
  };
  return (
    <div className="cont_main">
    <div className="container_table">
      <table className="resource_table rt1">
        <thead>
          <tr>
            <th className="restable_head" style={{ width: "50px !important" }}>
              <div style={{ display: "flex", marginBottom: "-12px" }}>
                <input type="checkbox" className="res_check" />
                <p className="res_tab_head_p">Student Name</p>
              </div>
            </th>
            <th className="restable_head res_tab_head_p">
              <div style={{ marginBottom: "-12px" }}>Email Id</div>
            </th>
            <th className="restable_head res_tab_head_p">
              <div style={{ marginBottom: "-12px" }}>Batch</div>
            </th>
            <th className="restable_head res_tab_head_p">
              <div style={{ marginBottom: "-12px" }}>Activate</div>
            </th>
            <th className="restable_head res_tab_head_p">
              <div style={{ marginBottom: "-12px" }}>Actions</div>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} style={{ backgroundColor: "white" }}>
              <td className="res_td" style={{ borderLeft: " 1px solid #ccc" }}>
                <div className="d-flex ">
                  <input type="checkbox" className="res_check" />

                  <p className="res_table_p">{item.name}</p>
                </div>
              </td>
              <td className="res_td">
                <p className="res_table_p2">{item.email}</p>
              </td>
              <td className="res_td res_table_p">{item.batch}</td>

              <td className="res_td res_table_p">
                <div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={item.active}
                      onChange={() => handleToggle(index)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </td>
              <td
                className="res_td res_table_p "
                style={{ borderRight: " 1px solid #ccc" }}
              >
                <button className="stu_tble_btn" onClick={handleClick}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default StudentTable;
