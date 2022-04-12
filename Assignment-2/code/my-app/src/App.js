import "./App.css";

function App({ employee }) {
  return (
    <div className="container">
      <div>
        <img src={employee.profileImg} alt="NO-IMG"></img>
        <div className="employeeDetails">
          <div className="emp-name">{employee.name}</div>
          <p>Location</p>
          <div className="emp-details">{employee.location}</div>
          <p>Blood Group</p>
          <div className="emp-details">{employee.bloodGroup}</div>
          <p>Age</p>
          <div className="emp-details">{employee.age}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
