import React from "react";
import "./App.css";
import "./index.js";
var arrow = "<";
function App({ employee }) {
  return (
    <div className="site-container">
      <div className="header">
        <p className="arrow">{arrow}</p>
        <h3 className="name">{employee.name}</h3>
        <p className="id">{employee.id}</p>
        <button className="btn">Print</button>
      </div>
      <div className="customer-info">
        <h3>
          {"Appointment "}
          <span>{employee.Appointment}</span>
        </h3>
        <h3>
          {"Eamil: "}
          <span>{employee.email}</span>
        </h3>
        <h3>
          {"Phone "}
          <span>{employee.phone}</span>
        </h3>
      </div>
      <div className="order-info">
        <h3 className="status">
          {"Status"}
          <p className="info">
            <div className="dot"></div>
            {employee.status}
          </p>
        </h3>
        <h3 className="door">
          {"Door"}
          <p className="info">{employee.Door}</p>
        </h3>
        <h3 className="time">
          {"Time"}
          <p className="info">{employee.Time}</p>
        </h3>
      </div>
      <div className="product-list">
        <div className="checkBox"></div>
        <div className="img">
          <img src={employee.profileImg} alt="Employee"></img>
        </div>
        <h3 className="role">
          {employee.role}
          <span className="work">{employee.work}</span>
        </h3>
        <p className="arrow1">{employee.arrow1}</p>
      </div>
    </div>
  );
}

export default App;
