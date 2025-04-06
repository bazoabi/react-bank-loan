export default function LoanForm() {
  return (
    <div id="LoanFormContainer" className="flex">
      <form id="LoanForm" className="flex">
        <h1>Requesting A Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input type="text"></input>

        <label>Phone Number:</label>
        <input type="text"></input>

        <label>Age:</label>
        <input type="text"></input>

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input type="checkbox" style={{ marginBottom: "10px" }}></input>

        <label>Salary</label>
        <select>
          <option>Less than 500$</option>
          <option>Between 500$ amd 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button id="submitBtn">Submit</button>
      </form>
    </div>
  );
}
