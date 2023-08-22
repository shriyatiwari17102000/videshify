import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoleTable = () => {
      // navigate to student information
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      role: "Hr Head",
      date: "20/8/2023",
  
    },
    {
        role: "Counselor",
        date: "20/8/2023",
    
      },
      {
        role: "Counselor Head",
        date: "20/8/2023",
    
      }
  ]);

  const handleClick = () => {
    navigate("/studentinfo/academics");
  };

  const handleToggle = (index) => {
    const updatedData = [...data];
    updatedData[index].active = !updatedData[index].active;
    setData(updatedData); 
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
                <p className="res_tab_head_p">Role Name</p>
              </div>
            </th>
           
           
            <th className="restable_head res_tab_head_p">
              <div style={{ marginBottom: "-12px" }}>Activate</div>
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
          {data.map((item, index) => (
            <tr key={item.id} style={{ backgroundColor: "white" }}>
              <td className="res_td" style={{ borderLeft: " 1px solid #ccc" }}>
                <div className="d-flex ">
                  <input type="checkbox" className="res_check" />

                  <p className="res_table_p">{item.role}</p>
                </div>
              </td>
              
              

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
              <td className="res_td res_table_p">{item.date}</td>
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

export default RoleTable;
