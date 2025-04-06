import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";

export default function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const handleLoanInputsChange = (event) => {
    setLoanInputs({ ...loanInputs, [event.target.name]: event.target.value });
  };

  const handleLoanCheckboxChange = (event) => {
    setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
  };

  return (
    <div id="LoanFormContainer" className="flex">
      <form id="LoanForm" className="flex">
        <h1>Requesting A Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={loanInputs.name}
          onChange={handleLoanInputsChange}
        ></input>

        <label>Phone Number:</label>
        <input
          name="phoneNumber"
          type="text"
          value={loanInputs.phoneNumber}
          onChange={handleLoanInputsChange}
        ></input>

        <label>Age:</label>
        <input
          name="age"
          type="text"
          value={loanInputs.age}
          onChange={handleLoanInputsChange}
        ></input>

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          style={{ marginBottom: "10px" }}
          checked={loanInputs.isEmployee}
          onChange={handleLoanCheckboxChange}
        ></input>

        <label>Salary</label>
        <select
          name="salary"
          value={loanInputs.salary}
          onChange={handleLoanInputsChange}
        >
          <option>Less than 500$</option>
          <option>Between 500$ amd 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button id="submitBtn">Submit</button>
      </form>

      {/* <Modal /> */}
    </div>
  );
}
