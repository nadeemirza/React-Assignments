import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const employee = {
  arrow: "<",
  name: "Alan Ford",
  id: "000005152",
  Appointment: "9:00(24-05-2016)",
  email: "alan.form@gmail.com",
  phone: +31123456789,
  status: "In Progress",
  Door: "Mark",
  Time: "10:30(25-05-2016)",
  profileImg: "https://www.w3schools.com/howto/img_avatar.png",
  role: "Boltart Bosbessen",
  work: "This is some random description about the product mentioned above.",
  arrow1: ">",
};

ReactDOM.render(
  <React.StrictMode>
    <App employee={employee} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
